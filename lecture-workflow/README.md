# Lecture workflow

How agents draft material for one Math 111 lecture. It is adapted from the worksheet workflow tested in the Bellingham Math Circle repository (`math-circle/worksheet-workflow/`; the experiment report is `math-circle/experiments/worksheet-genlab-opus5.5/REPORT.md`). That experiment compared ten ways of generating children's worksheets. James ranked the best one above his own hand-edited version in a blind review.

## What carries over from the experiment, and what is new

Tested there, and kept here:

- A written standard in the writer's prompt is the biggest lever. That means who reads the material, what good looks like and why, written in plain prose. Even a short do-not list removed nearly all of the surface AI tells.
- The best prompt also included human-written examples of the target register. `blocks/exemplars.md` is empty until the team adds examples, and filling it is the most important setup step.
- One review pass helps reliably but modestly. A fresh agent told only "Do a thorough, adversarial review", followed by a reviser told "revise to address the review", did as well as or better than checklist reviewers, simulated-classroom reviewers, combinations of three reviewers, and a plan-first designer.
- AI reviewers treat slop as cheap to fix; James did not. Judge the drafts yourself with that in mind.

New here, and untested:

- The standard (`blocks/standard.md`) and do-not list (`blocks/neg.md`) are rewritten for university lectures. Lecture material explains completely once students have tried a task. Worksheets for children leave the method to the child.
- The correctness check (`CRITIC-CHECK.md`) is part of the default run, not optional. It recomputes every number and verifies every claim about the world against a source. Lecture material makes many such claims, in front of a large class.
- The output format is open, because the team hasn't chosen one. Each brief names its format; LaTeX is the fallback.

## The three stages

Each stage runs in a fresh agent with only its stage file as instructions. The reviewer must not be the agent that wrote the draft.

1. **Writer** (`PROMPT.md`). It gets the lecture brief, the course context, the standard, the do-not list, the examples once they exist, and technical notes. It writes `draft/`.
2. **Review.** `CRITIC.md` is the adversarial review and writes `review.md`. `CRITIC-CHECK.md` checks correctness and sources and writes `review-check.md`. These two can run at the same time.
3. **Reviser** (`REVISE.md`). It addresses both reviews and writes `final/`.

## Running it

1. Write the brief: copy `briefs/TEMPLATE.md` to `briefs/<module>-<n>.md`. Fill in the situation, the mathematics, the objectives, what students already know, the real data and its sources, the classroom tools, and the format and length.
2. Check that `context.md` still describes the course.
3. Generate the stage files:
   `python3 lecture-workflow/make_prompts.py --brief lecture-workflow/briefs/<module>-<n>.md --run drafts/<module>-<n>-v1`
4. Run each stage file in a fresh agent: `PROMPT.md`; then `CRITIC.md` and `CRITIC-CHECK.md`; then `REVISE.md`.
   - Claude Code: one subagent per stage, prompted "Your instructions are in <run>/<STAGE>.md. Read it and follow it exactly."
   - Codex: one `codex exec` call per stage with the same prompt.
5. Read `final/` yourself before anything goes to students.

## Before the first serious use

- **Add the examples** to `blocks/exemplars.md` (instructions are in the file).
- **Agree on the standard and the do-not list** with Rekha and Sameer. These two files are the team's writing guide, and the workflow is only as good as they are.
- **Check the transfer once.** For the sample module's first lecture, also generate a draft from a bare prompt. Have someone compare the two without knowing which is which. That is the cheapest way to learn whether the worksheet results hold for lecture notes.

## Changes

- 2026-10-04: created from `math-circle/worksheet-workflow/` (tested 2026-10-01). Standard, do-not list, context, brief template and correctness check rewritten for Math 111; examples left for the team to supply.
- 2026-10-04: `blocks/neg.md` gains a line against clever section titles, from James's review of the first sample lecture (house-1).
