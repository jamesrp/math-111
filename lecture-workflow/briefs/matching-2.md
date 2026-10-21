Module: Stable matching (week 9)   Lecture: 2 of 3   Title: The deferred acceptance algorithm

Situation: Checking every matching for stability is hopeless for thousands of applicants. The question students will care about: is there a step-by-step procedure that always produces a stable matching, and can you run it by hand?

Mathematics: The Gale-Shapley deferred acceptance algorithm, stated in numbered steps; running it on the examples from lecture 9.1 with a table that records each round; why it must stop (each applicant proposes to each program at most once, so there are at most n² proposals); why the result has no blocking pair (an argument in words, following the rounds); an in-class activity where students play applicants and programs is welcome.

Learning objectives addressed: logic; following and describing an algorithm; reading tables; word problems.

Students already know: Lecture 9.1: preferences as ranked lists, matchings, blocking pairs, stable matchings, checking a matching for blocking pairs, n! matchings. From earlier weeks only arithmetic and n! are used.

Data and sources (the writer must find, verify and cite each; save the source text in draft/src/):
- Gale and Shapley's original paper ('College Admissions and the Stability of Marriage', American Mathematical Monthly, 1962) cited for the algorithm.
- Any claim about how the NRMP algorithm differs (Roth-Peranson, couples) sourced from the NRMP or Roth's papers.

In-class tools: calculators (phones are fine), laptops with Excel or Google Sheets, projector, whiteboard.

Format and length: a single self-contained HTML page (inline CSS and JavaScript, no external dependencies, no MathJax; math in plain HTML) that the instructor projects and students read afterwards, and that works on a phone. Header line "Math 111 · Module: Stable matching (week 9) · Lecture 2 of 3", then the lecture title. Numbered sections with plain titles that name their content. In-class tasks are boxed and numbered with time and tool in the label, for example "Task 2 (about 4 minutes, calculator)", each saying exactly what to produce, with its solution in a collapsed box right after it; task times add up to about half the period. A Sources list at the end, cited in the text with bracketed numbers, each source with its date and the figure quoted. Include an interactive element (for example a slider or a draggable point that redraws a graph) only if students use it in a task; when the lecture has graphs, draw them with inline SVG or canvas. Where students use a spreadsheet, give the layout as a CSV download and a copy-to-clipboard layout, with formulas, and say they were not tested in Excel or Google Sheets unless you tested them. The lecture period is 50 minutes, including in-class tasks.

Note on network access: direct curl/wget to outside sites is blocked in this environment; use the WebFetch tool to read sources, and save the relevant source text in draft/src/. A number that stands for the world is real and sourced, or labeled as made up.
