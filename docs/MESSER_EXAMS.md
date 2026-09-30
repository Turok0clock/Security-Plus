# Original Professor Messer exams

The app retains its three custom full exams and adds a separate `messer.html` assessment workspace for Exams A, B, and C from the user's supplied Professor Messer SY0-701 Practice Exams PDF, version 1.8.

## Source fidelity

- Source PDF is byte-for-byte identical to the supplied file.
- SHA-256: `438b213ef975987ca88894c5e1fb6da80bfafa4e68fdc62dd00917478167e603`.
- The original PDF question region is rendered directly, preserving wording, answer order, diagrams, tables, and question numbers.
- All 255 multiple-choice keys are extracted from the quick-answer pages and checked against the corresponding detailed-answer pages. Nine questions require multiple selections.
- Each exam retains its own original five PBQs. Response controls reflect the original tasks; detailed source answer pages remain available after submission.
- The original question order is retained. Nothing is sampled from the custom question bank.

## Scoring and records

The book recommends one point per question and optionally permits partial credit. This workspace uses the recommended one-point method: all required selections or PBQ fields must match the original answer key to earn one point. No partial credit is added. A score is out of 90 and is not converted to CompTIA's scaled score.

Timed mode permits 90 minutes; untimed practice is also available, as described in the book. Answers, flags, cursor, and deadline persist. Timer expiry submits saved responses. Results are retained separately from the custom practice history, under `security-plus-messer-v1`. Existing custom attempts and course completion stay in their existing storage. The main app's progress export includes the new Messer records, and the Messer page also has its own export/import.

## Verification

- 270 original question crops and unique IDs; 90 questions in each exam.
- 255 original multiple-choice option counts match source question pages.
- All 270 correct-answer fixtures earn one point; blank fixtures earn zero; partial multiple-choice selections earn zero.
- One wrong firewall field causes that PBQ to earn zero and an otherwise perfect Exam A to score 89/90.
- Saved PBQ response survives reload/resume; original custom progress remains unchanged.
- Timer expiry automatically submits; original explanations render.
- Offline source PDF and question controls load from the v10 service-worker cache.
- Browser viewport checks: 1024×768, 768×1024, and 390×844. Fit-question view displays the complete source question; zoom allows larger inspection.

These are browser checks at iPad sizes, not a physical iPad Safari test.

PDF rendering uses the bundled PDF.js distribution and its included license. Attribution for the supplied practice exams is displayed in the workspace.
