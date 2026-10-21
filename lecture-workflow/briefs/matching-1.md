Module: Stable matching (week 9)   Lecture: 1 of 3   Title: Stable matchings

Situation: Each year U.S. medical school graduates are matched to residency programs by an algorithm, the National Resident Matching Program. The question students will care about: when applicants and programs each rank the other side, what makes an assignment fair enough that nobody wants to break it?

Mathematics: Representing preferences as ranked lists in tables; a matching as a set of pairs; a blocking pair (an applicant and a program who both prefer each other to their assigned partners); a stable matching as one with no blocking pair; checking a given matching for blocking pairs systematically; small examples with 3 or 4 on each side (made up and labeled), including one where a matching that looks reasonable is unstable; counting how many matchings there are (n!, from week 6) to show why checking them all does not scale.

Learning objectives addressed: logic and reasoning; reading tables; counting; word problems.

Students already know: Students have done weeks 1 to 8, but this module uses only careful reading of tables and the factorial n! from lecture 6.3; assume nothing else.

Data and sources (the writer must find, verify and cite each; save the source text in draft/src/):
- Recent NRMP Main Residency Match statistics (number of applicants, positions, match rate) from the NRMP's published report for a named year, quoted.
- A source (for example nobelprize.org on the 2012 Nobel Memorial Prize in Economic Sciences to Alvin Roth and Lloyd Shapley, or the NRMP's own description) for the claim that the match uses a stable matching algorithm.

In-class tools: calculators (phones are fine), laptops with Excel or Google Sheets, projector, whiteboard.

Format and length: a single self-contained HTML page (inline CSS and JavaScript, no external dependencies, no MathJax; math in plain HTML) that the instructor projects and students read afterwards, and that works on a phone. Header line "Math 111 · Module: Stable matching (week 9) · Lecture 1 of 3", then the lecture title. Numbered sections with plain titles that name their content. In-class tasks are boxed and numbered with time and tool in the label, for example "Task 2 (about 4 minutes, calculator)", each saying exactly what to produce, with its solution in a collapsed box right after it; task times add up to about half the period. A Sources list at the end, cited in the text with bracketed numbers, each source with its date and the figure quoted. Include an interactive element (for example a slider or a draggable point that redraws a graph) only if students use it in a task; when the lecture has graphs, draw them with inline SVG or canvas. Where students use a spreadsheet, give the layout as a CSV download and a copy-to-clipboard layout, with formulas, and say they were not tested in Excel or Google Sheets unless you tested them. The lecture period is 50 minutes, including in-class tasks.

Note on network access: direct curl/wget to outside sites is blocked in this environment; use the WebFetch tool to read sources, and save the relevant source text in draft/src/. A number that stands for the world is real and sourced, or labeled as made up.
