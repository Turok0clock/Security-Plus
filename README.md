# Security+ School — SY0-701

An offline-capable study app for GitHub Pages and iPad Safari. No build system, account, API key, or paid runtime is required.

## Included

- 28 objective chapters with concept comparisons, worked situations, flow diagrams, notes, and a study tracker.
- Three separate 10-question reinforcement sets for every objective: 84 sets / 840 original scenario prompts.
- Three 90-item, 90-minute mixed exams: 85 multiple-choice questions and five interactive PBQs in each.
- 13 standalone scored PBQ workspaces reconstructed from the supplied practice formats, with generic original diagrams and documented technical corrections.
- Typed terminal simulations: infection investigation, OpenSSL CSR generation, passwordless SSH, and compromise analysis. Type `show` for available commands.
- Answer review, explanations for every multiple-choice option, flagged questions, missed-question retry, weak-area practice, and history.
- Guided acronym course (10 lessons) and ports/protocols course (7 lessons), with a prescribed sequence, worked examples, 51 applied scenario checks, per-option explanations, saved progress, and targeted retries. No search-first lists or flashcards.
- Exact Professor Messer links for all 120 topic videos across 28 objectives, watched checkboxes, next-unwatched navigation, and next-objective navigation.
- Full-screen PBQ workspaces: reference/terminal and active answers side by side, device/task selection, and persistent submit controls.
- Automatic local saving, saved attempts, JSON backup import/export, offline caching, and iPad home-screen icons.

## Use on GitHub Pages

1. Put the contents of this package in the repository root. `index.html` must be at the top level.
2. Commit to `main`.
3. In Settings → Pages, choose Deploy from a branch, `main`, and `/ (root)`.
4. Open the generated HTTPS URL in Safari.
5. In Backup & Install, wait for the offline cache to report ready.
6. Use Share → Add to Home Screen. Open that icon once online, then test in airplane mode.

The app uses relative URLs, so repository subpaths work. `.nojekyll` is included. There are no external script, font, or image dependencies. Messer videos and other external websites need internet.

## Practice scope

The original multiple-choice bank focuses on scenario recognition and concept distinctions. It is not a copy of Professor Messer's commercial exams and has not been independently calibrated to the real exam's difficulty. The timed exams draw from the same reinforcement bank; they are not a separate unseen bank. Each PBQ receives proportional credit within one exam item. Practice percentages do not convert to CompTIA scaled scores.

The chapters are reinforcement summaries, not an exhaustive replacement for the official objectives and Messer's course. Each chapter links its individual Messer videos in course order.

Read `docs/SOURCE_REVIEW.md` for corrections and ambiguities in the supplied PBQ examples. Scenarios 2 and 10 accept an evidence-insufficiency answer where the visible screenshots do not conclusively prove the example's selected answer.

## Data and updates

Progress stays in this browser's localStorage under `security-plus-school-v4`. Export a backup before clearing browser data, changing devices, or switching between browser and home-screen installations. This app does not import Network+ progress. Existing prototype completion flags are not treated as verified results.

A timed exam's deadline continues while the app is closed. When reopened after expiry, it submits the saved answers. Starting another attempt prompts before replacing the unfinished one. Submitted history retains the most recent 100 attempts.

This release uses cache v5 and preserves existing v4 progress, adding guided-course and video state. After replacing the repository files, open online, close every app tab and Home Screen instance, and reopen so the waiting update can activate. Do not clear website data.

For future releases, change the cache name in `sw.js` and the matching cache check in `js/app.js`. Closing all app tabs lets an installed update activate.

## Editing the content

Edit `authoring/curriculum.txt`, then run:

```sh
python3 authoring/generate.py
```

This regenerates the deterministic question bank in `js/curriculum.js`. PBQ tasks are in `js/labs.js`; terminal command behavior is in `js/pbqs.js`.

For local use:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`. Serve through HTTPS for remote installation.

## Verification

Browser checks covered scoring, saved answer and PBQ recovery, terminal command gating, hidden exam feedback, offline navigation, 90-item exam construction, backup import/export, timer expiry, and viewport overflow. See `docs/TEST_RESULTS.json`. Portrait 820×1180, landscape 1180×820, and mobile 390×844 layouts were inspected in headless Chromium. All 13 PBQs and every task page also passed bounds checks at 1024×768, 768×1024, and 1180×820. Guided grading/resume, watched-video persistence, direct URL mapping, and offline guided lessons were checked. Actual iPadOS Safari and its software keyboard still require device testing.

Guided lesson content is authored in `authoring/guided.py`; run it to regenerate `js/guided-data.js`. Video metadata in `js/videos.js` follows the official SY0-701 course index retrieved 2026-09-27. This independent study app is not affiliated with Professor Messer or CompTIA.
