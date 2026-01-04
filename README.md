# Client-Side JavaScript & Web Troubleshooting

## Overview

This project simulates a client-side tracking and debugging workflow commonly encountered in technical solutions, analytics support, and ad-tech platforms.

It demonstrates how JavaScript tracking events are implemented on a client website, validated through browser developer tools, and later investigated using SQL-style queries to diagnose missing or incomplete data.

The goal of this project is to showcase basic to intermediate proficiency in JavaScript, HTML, debugging, and SQL-based investigation, aligned with technical support and solutions engineering roles.

---

## Project Structure
```
├── index.html
├── tracking.js
├── form-validation.js
├── queries.sql
└── README.md
```
## Technologies Used

- HTML – Page structure and form elements  
- JavaScript – Event tracking, validation logic, debugging  
- Browser DevTools – Console logging, DOM inspection, error investigation  
- SQL (Simulated) – Event investigation and analytics queries  
- Git & GitHub – Version control and documentation  

---


## SQL & Event Investigation

Simulated how client-side JavaScript tracking events would be stored in an analytics database.  
Wrote SQL queries to investigate event volume, missing conversions, and metadata integrity.

This mirrors real-world debugging of client tracking issues using SQL-based analytics tools.

Example investigations include:
 - Viewing all tracked events
 - Counting events by type
 - Identifying users who clicked signup but did not submit the form
 - Analyzing form submissions by email domain
 - Detecting missing or incomplete metadata


## How to Run the Project

1. Clone the repository
2. Open the project folder in VS Code
3. Open index.html using a local server (e.g., Live Server)
4. Open browser Developer Tools → Console
5. Interact with the page:
6. Click the signup button
7. Submit the form with and without an email
8. Inspect logged tracking events and validation messages

## Future Improvements

- Add Elasticsearch-style (KQL) query examples
- Persist events using a lightweight database
- Add unit tests for validation logic
- Expand metadata tracking (browser, device, referrer)
