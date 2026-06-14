# Feature request (the demo task)

**Title:** Add a Task Status Chart to the dashboard

**Description:**
Right now the dashboard (`src/components/Dashboard.jsx`) only shows a list of
tasks. We want a small summary chart component that shows how many tasks are in
each status: `todo`, `in-progress`, and `done`.

**Requirements:**
1. Create a new component `src/components/TaskStatusChart.jsx`.
2. It takes a `tasks` array prop and renders a simple bar for each status
   showing the count (no chart library needed — use divs with widths).
3. Add a helper `countByStatus(tasks)` in `src/lib/taskStats.js` that returns
   `{ todo, 'in-progress', done }` counts. It must handle an empty array.
4. Write tests for `countByStatus` in `src/lib/taskStats.test.js`.
5. Render `<TaskStatusChart />` at the top of the dashboard.

**Acceptance:** Tests pass, chart shows correct counts, follows `CLAUDE.md`.
