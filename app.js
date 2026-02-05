(function () {
  const THEME_KEY = "matrix_theme";
  const DEFAULT_THEME = "dark";

  const $ = (id) => document.getElementById(id);

  const categoryTilesEl = $("categoryTiles");
  const updatesListEl = $("updatesList");
  const emptyStateEl = $("emptyState");
  const activeCategoryTitleEl = $("activeCategoryTitle");
  const activeCategoryDescEl = $("activeCategoryDesc");
  const searchInputEl = $("searchInput");
  const themeToggleEl = $("themeToggle");
  const themeLabelEl = $("themeLabel");
  const statsTextEl = $("statsText");

  const data = window.MATRIX_DATA?.categories ? window.MATRIX_DATA : { categories: [] };

  let activeCategoryId = null;
  let searchQuery = "";
  let globalResults = [];
  let selectedResultIndex = -1;

  function safeText(s) {
    return (s ?? "").toString();
  }

  function escapeHtml(str) {
    return safeText(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalize(s) {
    return safeText(s).toLowerCase();
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    const isDark = theme === "dark";
    themeLabelEl.textContent = isDark ? "Light mode" : "Dark mode";
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    setTheme(saved || DEFAULT_THEME);
  }

  function countAllUpdates() {
    return data.categories.reduce((acc, c) => acc + (c.updates?.length || 0), 0);
  }

  function getCategoryById(id) {
    return data.categories.find((c) => c.id === id) || null;
  }

  function statusClass(status) {
    const s = normalize(status);
    if (s.includes("workable") && !s.includes("unworkable")) return "workable";
    if (s.includes("unworkable")) return "unworkable";
    if (s.includes("conditional")) return "conditional";
    return "update";
  }

  function badgeHtml(status) {
    const cls = statusClass(status);
    const label = safeText(status || "Update");
    return `<span class="badge badge--${cls}"><span class="badge__dot" aria-hidden="true"></span>${escapeHtml(label)}</span>`;
  }

  function highlight(text, q) {
    const raw = safeText(text);
    if (!q) return escapeHtml(raw);
    const i = normalize(raw).indexOf(q);
    if (i < 0) return escapeHtml(raw);
    const before = raw.slice(0, i);
    const match = raw.slice(i, i + q.length);
    const after = raw.slice(i + q.length);
    return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
  }

  function matchesUpdate(update, q) {
    if (!q) return true;

    const aliases = Array.isArray(update.aliases) ? update.aliases : [];
    const haystack = [
      update.title,
      update.status,
      update.outcome,
      update.next_action,
      update.body,
      ...(update.tags || []),
      ...aliases
    ].map(normalize).join(" ");

    return haystack.includes(q);
  }

  function buildGlobalResults(q) {
    globalResults = [];
    selectedResultIndex = -1;

    data.categories.forEach((cat) => {
      (cat.updates || []).forEach((u) => {
        if (matchesUpdate(u, q)) {
          globalResults.push({ catId: cat.id, catName: cat.name, update: u });
        }
      });
    });

    // Sort: category then title (deterministic)
    globalResults.sort((a, b) => {
      const c = normalize(a.catName).localeCompare(normalize(b.catName));
      if (c !== 0) return c;
      return normalize(a.update.title).localeCompare(normalize(b.update.title));
    });
  }

  function renderTiles() {
    categoryTilesEl.innerHTML = "";
    const totalUpdates = countAllUpdates();
    statsTextEl.textContent = `${data.categories.length} categories • ${totalUpdates} items`;

    data.categories.forEach((cat) => {
      const tile = document.createElement("div");
      tile.className = "tile" + (cat.id === activeCategoryId ? " tile--active" : "");
      tile.setAttribute("role", "listitem");
      tile.tabIndex = 0;

      const updatesCount = (cat.updates || []).length;

      tile.innerHTML = `
        <div class="tile__name">${escapeHtml(cat.name)}</div>
        <div class="tile__meta">${updatesCount} item${updatesCount === 1 ? "" : "s"}</div>
      `;

      const activate = () => {
        activeCategoryId = cat.id;
        render();
      };

      tile.addEventListener("click", activate);
      tile.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activate();
        }
      });

      categoryTilesEl.appendChild(tile);
    });
  }

  function renderHeader() {
    const cat = getCategoryById(activeCategoryId);
    if (!cat) {
      activeCategoryTitleEl.textContent = "Select a category";
      activeCategoryDescEl.textContent = "Click a tile to view updates.";
      return;
    }
    activeCategoryTitleEl.textContent = cat.name;
    activeCategoryDescEl.textContent = safeText(cat.description) || "Updates for this category.";
  }

  function renderCategoryList(cat, q) {
    const updates = (cat.updates || []).slice();
    const filtered = updates.filter((u) => matchesUpdate(u, q));

    if (filtered.length === 0) {
      return `
        <div class="card">
          <div class="card__title">No results</div>
          <div class="card__meta">Try a different search term.</div>
        </div>
      `;
    }

    return filtered.map((u) => cardHtml(cat.name, u, q)).join("");
  }

  function cardHtml(catName, u, q) {
    const cls = statusClass(u.status);
    const title = highlight(u.title || "Untitled", q);
    const outcome = safeText(u.outcome);
    const nextAction = safeText(u.next_action);
    const statusTag = (u.tags || []).map((t) => escapeHtml(t)).join(" • ");
    const bannerLabel = cls.toUpperCase();

    const banner = (outcome || nextAction) ? `
      <div class="banner">
        <div class="banner__row">
          <span class="banner__label ${cls}">${escapeHtml(bannerLabel)}</span>
          ${nextAction ? `<span class="banner__text"><strong>Next action:</strong> ${highlight(nextAction, q)}</span>` : ""}
        </div>
        ${outcome ? `<div class="banner__row" style="margin-top:8px;"><span class="banner__text"><strong>Outcome:</strong> ${highlight(outcome, q)}</span></div>` : ""}
      </div>
    ` : "";

    return `
      <article class="card">
        <div class="card__top">
          <h2 class="card__title">${title}</h2>
          ${badgeHtml(u.status)}
        </div>
        <div class="card__meta">
          <span>Category: ${escapeHtml(catName)}</span>
          ${statusTag ? `<span>${statusTag}</span>` : ""}
        </div>
        ${banner}
        ${(u.body) ? `<div class="card__body">${highlight(u.body, q)}</div>` : ""}
      </article>
    `;
  }

  function renderGlobalResults(q) {
    buildGlobalResults(q);
    if (globalResults.length === 0) {
      return `
        <div class="card">
          <div class="card__title">No results</div>
          <div class="card__meta">Try a different search term.</div>
        </div>
      `;
    }

    // Group by category
    const groups = new Map();
    globalResults.forEach((r) => {
      if (!groups.has(r.catName)) groups.set(r.catName, []);
      groups.get(r.catName).push(r.update);
    });

    let html = "";
    for (const [catName, updates] of groups.entries()) {
      html += `
        <div class="card">
          <div class="card__top">
            <h2 class="card__title">${escapeHtml(catName)}</h2>
            <span class="badge badge--update"><span class="badge__dot" aria-hidden="true"></span>${updates.length} result${updates.length===1?"":"s"}</span>
          </div>
        </div>
      `;
      html += updates.map((u) => cardHtml(catName, u, q)).join("");
    }
    return html;
  }

  function renderUpdates() {
    const cat = getCategoryById(activeCategoryId);
    const q = normalize(searchQuery.trim());

    updatesListEl.innerHTML = "";

    // If user is searching, show global results (Ctrl/⌘+F behavior)
    if (q) {
      emptyStateEl.style.display = "none";
      updatesListEl.style.display = "grid";
      updatesListEl.innerHTML = renderGlobalResults(q);
      return;
    }

    // No search: show selected category
    if (!cat) {
      emptyStateEl.style.display = "grid";
      updatesListEl.style.display = "none";
      return;
    }

    emptyStateEl.style.display = "none";
    updatesListEl.style.display = "grid";
    updatesListEl.innerHTML = renderCategoryList(cat, "");
  }

  function render() {
    renderTiles();
    renderHeader();
    renderUpdates();
  }

  function wireEvents() {
    searchInputEl.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderUpdates();
    });

    themeToggleEl.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || DEFAULT_THEME;
      setTheme(current === "dark" ? "light" : "dark");
    });

    // Global Ctrl/⌘ + F to focus site search (Mac equivalent included)
    window.addEventListener("keydown", (e) => {
      const isFind = (e.key === "f" || e.key === "F") && (e.ctrlKey || e.metaKey);
      if (isFind) {
        e.preventDefault();
        searchInputEl.focus();
        searchInputEl.select();
      }

      // Esc clears search
      if (e.key === "Escape") {
        if (searchInputEl === document.activeElement || searchQuery) {
          searchInputEl.value = "";
          searchQuery = "";
          renderUpdates();
        }
      }
    });
  }

  function bootstrap() {
    initTheme();
    wireEvents();

    if (data.categories.length && !activeCategoryId) {
      activeCategoryId = data.categories[0].id;
    }

    render();
  }

  bootstrap();
})();
