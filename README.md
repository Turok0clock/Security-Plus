# Security+ School — SY0-701

An offline-capable study app for GitHub Pages and iPad Safari. No build system, account, API key, or paid runtime is required.

## Rebuilt learning and reasoning update

- 28 expanded study guides: mechanism explanations, decision flows, worked applications, comparison references, and source links.
- All 84 objective A/B/C sets replaced with 840 distinct scenario prompts, including applied decisions in every set. The separate foundation diagnostics remain introductory checks.
- Per-question notes, multi-select flag reasons, confidence, and reversible answer elimination in objective quizzes, custom exams, original Messer exams, and guided checks.
- Unanswered navigation prompts with explicit intentional skipping; PBQ section visibility and explicit blank acknowledgements. These checks use completeness only and never reveal correctness.
- Submitted attempts retain reasoning in reviews and JSON exports. Correct but uncertain answers appear in review priorities.
- Existing history retains its original question snapshots and scores; the A/B/C matrix distinguishes the new bank from earlier attempts. Original Messer PDF content and strict scoring are unchanged.
- Offline cache revision 11. Browser and installed-app storage remain separate; use backup export/import to transfer progress.

Rebuild authored content with `python authoring/rebuild/compile.py`. Runtime has no build dependency.

## Included

- A learning dashboard and Professor Desk timeline with domain/objective video durations, watched and remaining time, playback-speed estimates, lesson/domain completion, post-learning accuracy, and a review-priority matrix.
- 28 prerequisite introductions with a prior-knowledge bridge, teaching model, worked example, vocabulary, and watch-for questions. Each has its own independent 10-question foundation diagnostic (280 new questions), separate from the 840 post-video questions.
- Class stages: Introduction → Videos → Post-checks → Review & notes. Pre-check review links directly to assigned videos. Low post-check scores and recent missed concepts produce focused review lessons and a next-unused-set recommendation.
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

A timed exam's deadline continues while the app is closed. When reopened after expiry, it submits the saved answers. Starting another attempt prompts before replacing the unfinished one. Submitted history is retained across attempts. Local saving deduplicates identical question snapshots to reduce storage use while preserving the original wording. Export backups regularly; browser storage is finite.

This release uses cache v6 and preserves existing v4 progress, adding the school dashboard and introductory-lesson state. After replacing the repository files, open online, close every app tab and Home Screen instance, and reopen so the waiting update can activate. Do not clear website data.

### Your existing results

The same installation keeps its existing scores, notes, video checkmarks, and completed sections. Older completed-section flags migrate to lesson-completion state; missing video flags for those sections are inferred watched, while explicit unwatched flags are respected.

For another device or a clean installation, use Backup & Install → Import mode **Merge** and select your personal backup. Merge preserves existing device values and adds missing attempts and fields. It does not replace newer work; duplicate attempt IDs are not added again. **Replace** remains available for an exact restore. Personal backup files are deliberately separate from this public-site ZIP. Do not upload personal backup JSON to GitHub Pages.

### How the matrix works

- Lesson completion is separate from assessment proficiency. Choosing **Lessons complete** marks the listed videos watched; individual checkmarks can be adjusted afterward. Flagging a completed lesson for review does not erase completed learning.
- Video totals sum the 120 objective videos at normal playback speed: 15h 0m 54s. The separate 0.1 exam-introduction video is excluded. Time remaining excludes reading, quizzes, review, and breaks; it is not a prediction of exam readiness or actual study time.
- Each A/B/C cell shows the latest attempt on that set. Below 70% requests a focused lesson; 70–84% requests reinforcement; 85%+ is strong evidence on that check. Two distinct sets at 85%+, lessons complete, and the latest post-check at 85%+ produce the **Retain & revisit** signal. These are app teaching rules, not CompTIA cut scores.
- Pre-checks are diagnostic. They are excluded from post-learning accuracy and weak-area selection. The earliest retained pre-check is the baseline. Pre/post and recent post/post differences are displayed as percentage-point changes on different question sets, not controlled learning measurements.
- Recent missed concepts appear in focused lessons, even when an overall score is high. The most recent result for a concept determines whether it remains in that list. A repeated correct answer can reflect recall, so use distinct sets and delayed practice.
- Assessment history is retained rather than dropping the oldest attempts after 100 submissions. Identical question snapshots are deduplicated in local storage. Export periodically; browser storage remains finite. Scores are not validated predictions of real-exam performance.

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

Prerequisite content is in `authoring/introductions.txt` and `authoring/prechecks.txt`; run `python3 authoring/generate-prelearning.py` to regenerate `js/prelearning.js`. The prerequisite bank is a foundation diagnostic, not a simulated full exam. Tracking calculations are isolated in `js/tracking.js`, and class/dashboard presentation is in `js/school-ui.js`.

The school-dashboard update was tested for exact video-second totals, backup migration and idempotent merge, prerequisite scoring, pre/post separation, threshold changes, watched-state changes, completion/review independence, offline introductions and diagnostics, and iPad/phone layout bounds. Browser testing uses Chromium viewport emulation; actual iPadOS Safari and software-keyboard validation remain device-specific.
# Current learning update

The pre-video lessons now add a worked decision and a distinction section for every objective before the existing topic cards, acronym expansions, memory hooks, and ten-question diagnostic. Revised question IDs cover Sets A/B/C for Domains 3–5 and Sets B/C for Domains 1–2. The original Domain 1–2 Set A IDs and answer data remain available for saved attempts. Practice questions are based on the authored curriculum scenarios; they are original practice, not Professor Messer exam items or a calibrated prediction of the CompTIA exam.

The default theme is dark with violet and cyan accents. A Light theme button saves its setting on the device. Progress uses a separate storage key and remains intact when the theme changes. The version 9 service worker includes the new lessons and theme files for offline study; external videos still require internet.

To regenerate lesson content, run `python authoring/build-deep-lessons.py`. To regenerate the question bank, run `python authoring/generate.py`.
