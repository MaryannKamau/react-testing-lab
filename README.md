#  Royal Bank of Flatiron - Testing Lab

A React banking application that allows users to track expenditures, add new transactions, and perform dynamic searching and sorting. This project focuses on **Test-Driven Development (TDD)** using **Vitest** and **React Testing Library**.

## Features
- **Display Transactions**: View all bank movements fetched from a local JSON backend.
- **Add Transactions**: Persist new entries to the database via POST requests.
- **Search**: Dynamically filter transactions by description.
- **Sort**: Organize the table alphabetically by Description or Category.
- **Testing Suite**: Comprehensive coverage of all major, edge, and failure cases.

##  Testing Suite Overview
This project uses **Vitest** for unit and integration testing. The suite is divided into modular files to ensure clean separation of concerns:

- **DisplayTransactions.test.js**: Validates initial data fetching and empty state handling.
- **AddTransactions.test.js**: Ensures form submissions update the UI and trigger correct POST requests.
- **SearchSort.test.js**: Confirms case-insensitive filtering and alphabetical sorting logic.

### Running the Tests
To execute the testing suite, run:
```bash
npm test


