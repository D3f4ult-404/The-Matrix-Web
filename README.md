# Lisinski Law Firm | Phase I | Case Assembly | The Matrix – Web

## Purpose

This site exists to serve as a **single source of truth** for **Phase I – Case Assembly** decision-making.

Its sole function is to allow Case Assembly team members to:
- Quickly determine whether a case is **Workable**, **Unworkable**, or **Conditional**
- Identify the **correct next action** based on the task(s) present in a case
- Avoid incorrect procedures, rework, and fix requests caused by interpretation or outdated guidance

This site replaces reliance on:
- Memory
- Verbal instructions
- Conflicting explanations

If there is a discrepancy between what someone remembers and what this site states, **this site controls**.

---

## Scope

- **Phase I only – Case Assembly**
- Content is sourced directly from the official Excel decision matrix

This site does **not**:
- Make decisions for you
- Modify cases
- Replace required task completion
- Extend beyond Phase I responsibilities

---

## How to Use the Site

### 1. Locate the Task
Use the search bar or category tiles to find the task name listed in your case.

You may:
- Click a category on the left
- Or use **Ctrl + F (Windows/Linux)** / **⌘ + F (Mac)** to search across all categories

### 2. Read the Outcome
Each item clearly displays:
- **Status badge**
  - 🟢 Workable
  - 🔴 Unworkable
  - 🟡 Conditional
- A decision banner summarizing the outcome

### 3. Follow the Next Action
Each item specifies exactly what to do next, such as:
- “Return to Case Assembly Queue”
- “Assemble Packet and Assign TL Review”

No additional interpretation is required.

---

## Design Principles

This site is intentionally:
- **Static** – content does not change unless the source Excel changes
- **Explicit** – outcomes and next actions are clearly stated
- **Search-first** – optimized to behave like a smarter “Ctrl + F”
- **Low-friction** – minimal reading, maximum clarity

The goal is not to teach procedures, but to **prevent mistakes before they happen**.

---

## Status Badges

Status badges use color to remove ambiguity:

- 🟢 **Workable**  
  Case may proceed to assembly following the listed action.

- 🔴 **Unworkable**  
  Case must not be assembled. Follow the listed return or escalation step.

- 🟡 **Conditional**  
  Outcome depends on a specific condition stated in the entry.

---

## Updates & Maintenance

- Content is generated from the official Excel file
- When the Excel is updated, the site must be regenerated
- No manual edits should be made to `data.js`

A helper script (`build_site.py`) is included to regenerate site data from the Excel source when needed.

---

## Deployment

This site is designed to be hosted as a **static GitHub Pages site**.

No server, database, or credentials are required.

---

## Final Note

This site is not documentation for discussion.

It is a **decision reference**.

When in doubt, follow the **most restrictive outcome** listed.

