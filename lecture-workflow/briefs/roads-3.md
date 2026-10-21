Module: Building mountain roads (week 10)   Lecture: 3 of 3   Title: When greedy algorithms work

Situation: Kruskal's algorithm always takes the cheapest available road, and it always wins. The question students will care about: does grabbing the cheapest option always work, for example when finding the shortest drive between two towns or making change with coins?

Mathematics: Greedy algorithms named as a type; an argument in words for why Kruskal's choice is safe (the cheapest edge leaving any group of connected towns belongs to some cheapest network), illustrated on the map; a shortest-route problem where choosing the nearest next town fails, with a small counterexample; making change: greedy works for U.S. coins but fails for a made-up coin system (for example 1, 3, 4 cents for 6 cents), with a counterexample; how to tell a counterexample settles a question; a short look back over the course: which methods from which weeks answered which real questions, stated in one table.

Learning objectives addressed: logic; reading and constructing a simple argument; following algorithms; reading tables.

Students already know: Lectures 10.1 and 10.2: graphs, trees, minimum spanning trees, Kruskal's algorithm. Week 9: algorithms, proof by contradiction. The course covered, by week: 1 medicine dosages (fractions, units, percentages, spreadsheets); 2 linear equations and lines (breakfast); 3 inequalities and linear programming (breakfast on a budget); 4 mortgages, geometric sums and exponential growth; 5 kitchen geometry (area, Pythagorean theorem, volume); 6 counting (Starbucks); 7 probability and the stock market; 8 statistics and regression; 9 stable matching.

Data and sources (the writer must find, verify and cite each; save the source text in draft/src/):
- The same towns and cost sources as lectures 10.1 and 10.2, cited again.
- U.S. coin denominations need no source; the made-up coin system is labeled as made up.

In-class tools: calculators, projector, whiteboard, paper for drawing graphs.

Format and length: a single self-contained HTML page (inline CSS and JavaScript, no external dependencies, no MathJax; math in plain HTML) that the instructor projects and students read afterwards, and that works on a phone. Header line "Math 111 · Module: Building mountain roads (week 10) · Lecture 3 of 3", then the lecture title. Numbered sections with plain titles that name their content. In-class tasks are boxed and numbered with time and tool in the label, for example "Task 2 (about 4 minutes, calculator)", each saying exactly what to produce, with its solution in a collapsed box right after it; task times add up to about half the period. A Sources list at the end, cited in the text with bracketed numbers, each source with its date and the figure quoted. Include an interactive element (for example a slider or a draggable point that redraws a graph) only if students use it in a task; when the lecture has graphs, draw them with inline SVG or canvas. Where students use a spreadsheet, give the layout as a CSV download and a copy-to-clipboard layout, with formulas, and say they were not tested in Excel or Google Sheets unless you tested them. The lecture period is 50 minutes, including in-class tasks.

Note on network access: direct curl/wget to outside sites is blocked in this environment; use the WebFetch tool to read sources, and save the relevant source text in draft/src/. A number that stands for the world is real and sourced, or labeled as made up.
