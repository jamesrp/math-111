Module: Titrating medicine (week 1)   Lecture: 3 of 3   Title: A dosage table in a spreadsheet

Situation: The package of children's liquid acetaminophen prints a dosing chart by weight. Students in lecture 1.1 computed one dose by hand; doing it for every weight from 24 to 95 pounds by hand is tedious and error-prone. The question students will care about: can we build that whole chart in a spreadsheet, check it against the chart printed on the package, and reuse the same idea for an IV infusion (how many mL per hour, and how many drops per minute)?

Mathematics: Organizing data in columns with a header row; entering a formula that refers to other cells; copying a formula down so each row uses its own inputs (relative references); reading the finished table to answer questions; comparing a computed table with the printed chart and explaining differences (rounding, weight bands, the dose rate the chart uses). Second part: an IV infusion rate in mL per hour from a volume and a time, and drops per minute from a drip factor (drops per mL), built as a second small table. Put constants (such as 160/5 or the conversion factor) inside the formulas for now, and end by noting the problem this causes when a constant changes: every formula must be edited. Lecture 4.1 (Buying a house) introduces fixed cell references as the fix; name that question here but do not teach fixed references.

Learning objectives addressed: basic Excel use (organizing data in columns, performing operations, copying formulas); reading tables; conversions; calculator use.

Students already know: lecture 1.1 (rates as fractions, unit conversion by multiplying by a fraction equal to 1, the weight-based acetaminophen dose, order of operations, estimating) and lecture 1.2 (percentages, concentrations, dilution). They know how to type a number into a spreadsheet cell; assume nothing more about spreadsheets.

Data and sources (the writer must find, verify and cite each; save the source text in draft/src/):
- The weight-based dosing chart printed on a U.S. children's liquid acetaminophen product (160 mg/5 mL), from its label on DailyMed: weight bands, ages, and mL per dose. Quote the chart exactly.
- The weight-based dose per kg used for the computed column, with its source (for example the American Academy of Pediatrics, healthychildren.org, or a hospital formulary), quoted.
- Common IV administration set drip factors (for example 10, 15, 20 drops/mL for macrodrip and 60 drops/mL for microdrip) from a nursing or manufacturer source, cited. Any infusion order used is labeled as made up.

In-class tools: laptops with Excel or Google Sheets (students follow along), calculators, projector. Provide the spreadsheet layout as a CSV download and a copy-to-clipboard layout, with formulas, and say which spreadsheet programs it was checked against or what to do if pasting fails.

Format and length: a single self-contained HTML page (inline CSS and JavaScript, no external dependencies, no MathJax; math in plain HTML) that the instructor projects and students read afterwards, and that works on a phone. Header line "Math 111 · Module: Titrating medicine · Lecture K of 3", then the lecture title. Numbered sections with plain titles that name their content (for example "Unit conversions", "Using a spreadsheet"). In-class tasks are boxed and numbered with time and tool in the label, for example "Task 2 (about 4 minutes, calculator)", each saying exactly what to produce, with its solution in a collapsed box right after it; task times add up to about half the period. A Sources list at the end, cited in the text with bracketed numbers, each source with its date and the figure quoted. Include an interactive element only if students use it in a task. The lecture period is 50 minutes, including in-class tasks.

Safety framing: this is a mathematics lecture, not clinical training. Say once, briefly, that real dosing follows the prescriber's order, the product label and institutional protocol, and that the numbers here illustrate the arithmetic.

Note on network access: direct curl/wget to outside sites is blocked in this environment; use the WebFetch tool to read sources, and save the relevant source text in draft/src/.
