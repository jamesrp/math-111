Module: Building mountain roads (week 10)   Lecture: 2 of 3   Title: Minimum spanning trees

Situation: Connect all the towns from lecture 10.1 so that every town can reach every other, at the lowest total cost. The question students will care about: which roads should be built, and how do you know nothing cheaper exists?

Mathematics: Spanning trees; the minimum spanning tree problem; Kruskal's algorithm in numbered steps (sort edges by cost, add the cheapest edge that does not make a cycle, stop at n − 1 edges), run by hand with a table on the lecture 10.1 map; checking the result has n − 1 edges and connects everything; Prim's algorithm as a second method that gives the same total (optional); why trying all spanning trees does not scale (there can be very many; quote Cayley's formula nⁿ⁻² for complete graphs as a fact). An interactive graph where students click edges to build a tree and see the total is welcome if a task uses it.

Learning objectives addressed: following an algorithm; logic; reading diagrams and tables; arithmetic.

Students already know: Lecture 10.1: graphs, weighted edges, paths, cycles, trees, n − 1 edges in a tree, the mountain-town map. Week 9: following an algorithm step by step and an argument by contradiction.

Data and sources (the writer must find, verify and cite each; save the source text in draft/src/):
- The same towns, distances and cost sources as lecture 10.1, cited again.
- Kruskal's 1956 paper cited for the algorithm; Cayley's formula cited to a standard reference if stated.

In-class tools: calculators, projector, whiteboard, paper for drawing graphs.

Format and length: a single self-contained HTML page (inline CSS and JavaScript, no external dependencies, no MathJax; math in plain HTML) that the instructor projects and students read afterwards, and that works on a phone. Header line "Math 111 · Module: Building mountain roads (week 10) · Lecture 2 of 3", then the lecture title. Numbered sections with plain titles that name their content. In-class tasks are boxed and numbered with time and tool in the label, for example "Task 2 (about 4 minutes, calculator)", each saying exactly what to produce, with its solution in a collapsed box right after it; task times add up to about half the period. A Sources list at the end, cited in the text with bracketed numbers, each source with its date and the figure quoted. Include an interactive element (for example a slider or a draggable point that redraws a graph) only if students use it in a task; when the lecture has graphs, draw them with inline SVG or canvas. Where students use a spreadsheet, give the layout as a CSV download and a copy-to-clipboard layout, with formulas, and say they were not tested in Excel or Google Sheets unless you tested them. The lecture period is 50 minutes, including in-class tasks.

Note on network access: direct curl/wget to outside sites is blocked in this environment; use the WebFetch tool to read sources, and save the relevant source text in draft/src/. A number that stands for the world is real and sourced, or labeled as made up.
