Module: Buying a house (sample module)   Lecture: 1 of 3   Title: What will the monthly payment be?

Situation: A typical home in King County sold for $845,000 in August 2026, and the average 30-year fixed mortgage rate on October 1, 2026 was 7.28%. A buyer who puts 20% down borrows the rest and pays it back in equal monthly payments over 30 years. The question students will care about: what is that monthly payment, and why does a loan of about $676,000 end up costing far more than $676,000 in total?

Mathematics: Converting an annual percentage rate to a monthly rate; percentages as multipliers; tracking a balance month by month with the rule "new balance = old balance + interest - payment"; building that rule in a spreadsheet with a fixed cell reference and copying it down 360 rows; finding the payment that brings the balance to zero after 360 months by trial and error (and, if time allows, by a systematic bracketing search or Excel's Goal Seek). Students should see why early payments are mostly interest, and see total interest paid. The closed-form payment formula is deferred to lecture 2 (geometric sums), so this lecture should end by naming the question that formula will answer, not by deriving it. Use a small loan with a short term (for example a few months, numbers made up and labeled as such) so students can do the first rows by hand before the spreadsheet.

Learning objectives addressed: conversion between fractions, decimals, and percentages; calculator use; order of operations; basic Excel use (organizing data in columns, copying formulas, fixed cell references); reading tables and graphs.

Students already know: arithmetic with decimals and percentages; how to enter a number and a simple formula in a spreadsheet cell. No earlier lecture in this module; this is the first lecture of the course's sample module.

Data and sources (verify each and save the source text or a capture in draft/src/):
- King County median sale price, residential homes and condominiums, August 2026: $845,000. Northwest Multiple Listing Service, "Market Snapshot August 2026", https://www.nwmls.com/market-snapshot-august-2026/
- 30-year fixed-rate mortgage average, week of October 1, 2026: 7.28%. Freddie Mac Primary Mortgage Market Survey, news release "Mortgage Rates Average 7.28%", https://freddiemac.gcs-web.com/news-releases/news-release-details/mortgage-rates-average-728 (archive at https://www.freddiemac.com/pmms). The 15-year rate in the same release is 6.60%, available for a comparison task.
- The 20% down payment is a common benchmark, not a requirement; say so where it is used. Property taxes, insurance, and fees are left out; name that simplification once.
Note on network access: direct curl/wget to these sites is blocked in this environment; use the WebFetch tool to read them.

In-class tools: laptops with Excel or Google Sheets (students follow along), calculators, a projector. Students may also use phones.

Format and length: a single self-contained HTML page (inline CSS and JavaScript, no external dependencies) that the instructor projects and students read afterwards. Include at least one interactive element that does real work, for example a slider for the monthly payment that redraws the balance-over-time graph so students can hunt for the payoff payment, and a downloadable or copyable spreadsheet layout (a CSV of the table setup with formulas is fine). Math can be plain HTML; do not load MathJax from a CDN. The lecture period is 50 minutes, including in-class tasks.
