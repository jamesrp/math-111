#!/usr/bin/env python3
"""Assemble the stage prompts for one run of the lecture workflow.

Usage:
  python3 lecture-workflow/make_prompts.py --brief lecture-workflow/briefs/house-1.md --run drafts/house-1-v1

Writes into the run folder:
  PROMPT.md        writer: brief + course context + standard + do-not list + examples + technical notes
  CRITIC.md        generic adversarial review          -> review.md
  CRITIC-CHECK.md  correctness and sources check       -> review-check.md
  REVISE.md        revision                            -> final/
Each stage is meant for a fresh agent. See lecture-workflow/README.md.
"""
import argparse, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))

def read(*parts):
    return open(os.path.join(HERE, *parts)).read().strip()

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--brief", required=True, help="lecture brief (see briefs/TEMPLATE.md)")
    ap.add_argument("--run", required=True, help="run folder to create, e.g. drafts/house-1-v1")
    ap.add_argument("--context", default=os.path.join(HERE, "context.md"), help="course context file")
    a = ap.parse_args()

    run = os.path.abspath(a.run)
    if os.path.exists(os.path.join(run, "PROMPT.md")):
        sys.exit(f"{run} already has a PROMPT.md; use a new run folder.")
    os.makedirs(os.path.join(run, "draft", "src"), exist_ok=True)
    os.makedirs(os.path.join(run, "draft", "checks"), exist_ok=True)

    examples = read("blocks", "exemplars.md")
    blocks = [
        read("blocks", "ask.md"),
        "=== Lecture brief ===\n\n" + open(a.brief).read().strip(),
        "=== Course context ===\n\n" + open(a.context).read().strip(),
        read("blocks", "standard.md"),
        read("blocks", "neg.md"),
    ]
    if examples.startswith("EXAMPLES NOT YET ADDED"):
        print("Warning: blocks/exemplars.md has no examples yet, so the writer prompt omits them.", file=sys.stderr)
    else:
        blocks.append(examples)
    blocks.append(read("blocks", "harness.md"))
    files = {
        "PROMPT.md": "\n\n\n".join(blocks),
        "CRITIC.md": read("stages", "critic.md"),
        "CRITIC-CHECK.md": read("stages", "critic-check.md"),
        "REVISE.md": read("stages", "reviser.md"),
    }
    for name, text in files.items():
        with open(os.path.join(run, name), "w") as f:
            f.write(text.replace("{{RUN_DIR}}", run) + "\n")
    print(f"Run folder: {run}")
    print("Next, each in a fresh agent:")
    print(f"  1. {run}/PROMPT.md        (writer -> draft/)")
    print(f"  2. {run}/CRITIC.md        (review -> review.md)")
    print(f"     {run}/CRITIC-CHECK.md  (correctness and sources -> review-check.md)")
    print(f"  3. {run}/REVISE.md        (revision -> final/)")

if __name__ == "__main__":
    main()
