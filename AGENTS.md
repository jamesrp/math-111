# Project guidance

Read `PLANNING.md` for the project: a redesign of UW Math 111 for students outside STEM, built around familiar situations that make the mathematics useful.

## Workflow to draft lecture material

To draft a lecture, use [lecture-workflow/](lecture-workflow/README.md) rather than writing the material in one pass yourself.

1. Write the lecture brief from `lecture-workflow/briefs/TEMPLATE.md`. Include the real data the lecture will use, with sources.
2. Run `python3 lecture-workflow/make_prompts.py --brief <brief> --run drafts/<name>-v1`.
3. Run the stage files in order, each in a fresh agent (a subagent in Claude Code, a separate `codex exec` run or session in Codex): `PROMPT.md` (writer), then `CRITIC.md` (adversarial review) and `CRITIC-CHECK.md` (correctness and sources), then `REVISE.md`. The reviewer must not be the writer.
4. If you were started with one of these stage files, do only that stage.
5. Present `final/` for the instructors to read. Nothing generated goes to students unreviewed.

The writing standard for all lecture material, including material written outside the workflow, is `lecture-workflow/blocks/standard.md` together with `lecture-workflow/blocks/neg.md`. Change these files deliberately and log each change in `lecture-workflow/README.md`.
