Sources for "Counting drink orders" (Math 111, week 6, lecture 1).
All starbucks.com data accessed 2026-10-04 with the WebFetch tool.
The product pages at https://www.starbucks.com/menu/product/<number>/<hot|iced>
render with JavaScript; the menu data they display is served as JSON at
https://www.starbucks.com/apiproxy/v1/ordering/<number>/<hot|iced>.

These files are WebFetch extracts, not raw JSON. WebFetch passes the page to a
language model and returns that model's answer, so an extract can contain
summarizing or copying errors. Each figure used in the lecture was checked
against more than one extract where extracts disagreed; the "Revision check"
notes in each file record what was re-fetched on 2026-10-04 and what came back.
