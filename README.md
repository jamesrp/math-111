# Math 111 lecture notes

Lecture notes for a redesign of UW Math 111, published with GitHub Pages.

Each lecture is a single self-contained HTML page under `week-NN/`. The course index is `index.html`.

Some lectures also publish the saved source extracts they cite, in a `src/` folder next to the page. Lecture 8.2 also publishes its calculation script in `checks/`.

To publish: Settings > Pages > Build and deployment > Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.

## Authoring

The lectures were written with the multi-agent workflow in `lecture-workflow/`: one brief per lecture in `lecture-workflow/briefs/`, then writer, critic, correctness-check and revise stages. `AGENTS.md` (read by `CLAUDE.md`) tells agents how to run it. Workflow runs write to `drafts/`, which is not tracked.
