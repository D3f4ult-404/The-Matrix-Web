window.MATRIX_DATA = {
  "categories": [
    {
      "id": "assemble-case-tasks",
      "name": "Assemble Case Tasks",
      "description": "Decision flow for Case Assembly based on task name/status: outcome and required steps.",
      "updates": [
        {
          "title": "Attorney Review (any task with 'Attorney Review' in name, e.g., DER Attorney Review – Spouse)",
          "date": "2026-02-05",
          "status": "Conditional",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "Attorney Review (any task with 'Attorney Review' in name, e.g., DER Attorney Review – Spouse)\n\nExceptions: \"Intake Attorney Review\" tasks don't make the case unworkable for us",
          "outcome": "Conditional – Unworkable if the Attorney Review task is not related to the INTAKE Team"
        },
        {
          "title": "Schedule Form Appt",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "Schedule Form Appt",
          "outcome": "Unworkable"
        },
        {
          "title": "Form Appt",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "Form Appt",
          "outcome": "Unworkable"
        },
        {
          "title": "Bio Doc Appt",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "Bio Doc Appt",
          "outcome": "Unworkable"
        },
        {
          "title": "Complete Forms (all variations, incl. DER)",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "Complete Forms (all variations, incl. DER)",
          "outcome": "Unworkable"
        },
        {
          "title": "TL Form Review",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "TL Form Review",
          "outcome": "Unworkable"
        },
        {
          "title": "Case Changes (DA ↔ AOS)",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue",
          "body": "Case Changes (DA ↔ AOS)",
          "outcome": "Unworkable"
        },
        {
          "title": "FBI-Related Tasks (PL Review, FBI Follow Up, FP Received?, DER FBI Follow Up)",
          "date": "2026-02-05",
          "status": "Conditional",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "If NBC is not found: Return to Case Assembly Queue.\nIf NBC Is found: Assemble Packet + Assign TL Review",
          "body": "FBI-Related Tasks (PL Review, FBI Follow Up, FP Received?, DER FBI Follow Up)",
          "outcome": "Conditional – Unworkable if NBC not uploaded"
        },
        {
          "title": "Fixed, CL CORR out SCOPE",
          "date": "2026-02-05",
          "status": "Workable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Assemble Packet + Assign TL Review",
          "body": "Fixed, CL CORR out SCOPE",
          "outcome": "Workable"
        },
        {
          "title": "Fixed, Atty Review",
          "date": "2026-02-05",
          "status": "Workable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Assemble Packet + Assign TL Review",
          "body": "Fixed, Atty Review",
          "outcome": "Workable"
        },
        {
          "title": "Atty Reviewed Errors",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:              Attorney has found fundamental errors with case documents that may potentially affect case outcome negatively if left unchecked.",
          "body": "Atty Reviewed Errors",
          "outcome": "Unworkable"
        },
        {
          "title": "DR-REVIEW",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThis task is linked to the DocuSign, so even if the docusign appears as signed in the DocuSign and Dropbox sections, the case remains unworkable if this task is still pending, as it indicates that corrections are pending.",
          "body": "DR-REVIEW",
          "outcome": "Unworkable"
        },
        {
          "title": "SP - AFV",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThis task is linked to errors found in certain documents, and an AFV will be created to highlight these errors. Once this task is completed, you may proceed and assemble the packet.",
          "body": "SP - AFV",
          "outcome": "Unworkable"
        },
        {
          "title": "DR-CHANGES",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThis task indicates that changes need to be made to the Declaration, and the case is unworkable until this task is completed.",
          "body": "DR-CHANGES",
          "outcome": "Unworkable"
        },
        {
          "title": "DS-MISSING DOC",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThis task indicates that there are documents pending",
          "body": "DS-MISSING DOC",
          "outcome": "Unworkable"
        },
        {
          "title": "Send Dec + Forms",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThis task indicates that there are still items that need to be completed.",
          "body": "Send Dec + Forms",
          "outcome": "Unworkable"
        },
        {
          "title": "CL Signed Packet?",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThis task indicates that the DocuSign is pending, and if it has already been signed, the appropriate team still needs to call the client to confirm that they understand what was signed and whether any changes are needed. If so, corrections will be made.",
          "body": "CL Signed Packet?",
          "outcome": "Unworkable"
        },
        {
          "title": "DF-ESCA HS",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue: \nThe Signatures and Forms team confirmed that if this is still pending, it means the client has not signed the HelloSign. It doesn't matter if the Cl signed the docusign",
          "body": "DF-ESCA HS",
          "outcome": "Unworkable"
        },
        {
          "title": "DF-ESCA CORR",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nModifications to the Docusign. It doesn't matter if the Cl signed the docusign",
          "body": "DF-ESCA CORR",
          "outcome": "Unworkable"
        },
        {
          "title": "FIX, CL CORR InScope",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nModifications to the Docusign. It doesn't matter if the Cl signed the docusign",
          "body": "FIX, CL CORR InScope",
          "outcome": "Unworkable"
        },
        {
          "title": "FIXED, CL CORR InScope",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nModifications to the Docusign. It doesn't matter if the Cl signed the docusign",
          "body": "FIXED, CL CORR InScope",
          "outcome": "Unworkable"
        },
        {
          "title": "FIXED, CL CORR OutScope",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nModifications to the Docusign. It doesn't matter if the Cl signed the docusign",
          "body": "FIXED, CL CORR OutScope",
          "outcome": "Unworkable"
        },
        {
          "title": "Resend Link",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nModifications to the Docusign. It doesn't matter if the Cl signed the docusign",
          "body": "Resend Link",
          "outcome": "Unworkable"
        },
        {
          "title": "Mail Re-Cert Request",
          "date": "2026-02-05",
          "status": "Workable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Assemble Packet + Assign TL Review",
          "body": "Mail Re-Cert Request",
          "outcome": "Workable"
        },
        {
          "title": "Submit Assembly Pending",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "This task used to be launched by the Legal Clerk Team; however, it is no longer used nowadays. If this task appears, please escalate it to us and we will contact them to verify whether it can be marked as N/A or if it was created by mistake and was supposed to be an ESCA task. The Manager of the Legal Clerk Team has confirmed and approved this.",
          "body": "Submit Assembly Pending",
          "outcome": "Unworkable"
        },
        {
          "title": "DS-SMS DOCS",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nDocs are pending",
          "body": "DS-SMS DOCS",
          "outcome": "Unworkable"
        },
        {
          "title": "FIX SG PG",
          "date": "2026-02-05",
          "status": "Workable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "If this task is pending, the CA must be careful and look for the DocuSign attached to the Dec+Forms document. If it is signed, the CA must make sure to include the version of the forms that contains this document in the packet. Since there is a Fix SG PG, this SG PG packet may receive any type of modification and should not be used as a reference for the form editions.",
          "body": "FIX SG PG",
          "outcome": "Workable"
        },
        {
          "title": "DS-TL Review",
          "date": "2026-02-05",
          "status": "Unworkable",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "Return to Case Assembly Queue:\nThis task is created for changes to specific documents. It is not workable while it is pending",
          "body": "DS-TL Review",
          "outcome": "Unworkable"
        }
      ]
    },
    {
      "id": "legal-tool-esca-ic-request",
      "name": "Legal Tool - ESCA IC Request",
      "description": "Tasks listed under the Legal Tool section in the provided spreadsheet.",
      "updates": [
        {
          "title": "P# – 48 HOURS – LET-XXXXXXX",
          "date": "2026-02-05",
          "status": "Update",
          "tags": [
            "status: Not Started / In Progress"
          ],
          "next_action": "",
          "body": "",
          "outcome": ""
        }
      ]
    }
  ]
};
