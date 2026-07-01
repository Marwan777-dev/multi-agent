# Spec: Task Dashboard enhancements

Eight small, independent features for the Team Dashboard app. Each becomes one
GitHub issue (see `scripts/create-issues.sh`). Every issue is labeled `agent`,
which auto-runs the multi-agent team (`.github/workflows/claude.yml`) — no need
to type `@claude`. All eight run in parallel, each opening its own PR.

All work must follow `CLAUDE.md`: functional components, named exports, one
component per file, and **every new `src/lib/` utility needs a matching
`*.test.js`**. Handle empty/missing arrays without crashing.

---

## 1. Filter tasks by status
Add `filterByStatus(tasks, status)` in `src/lib/filterTasks.js` returning only
tasks whose `status` matches. Handle empty/missing arrays and an unknown status.
Add `src/lib/filterTasks.test.js`.

## 2. Sort tasks by title
Add `sortByTitle(tasks)` in `src/lib/sortTasks.js` returning a new array sorted
alphabetically by `title` (case-insensitive), without mutating the input.
Add `src/lib/sortTasks.test.js`.

## 3. Completion rate helper
Add `completionRate(tasks)` in `src/lib/completionRate.js` returning the
percentage (0–100, integer) of tasks with status `done`. Return `0` for an
empty array. Add `src/lib/completionRate.test.js` and show the rate as a line
of text at the top of `Dashboard.jsx`.

## 4. Group tasks by status
Add `groupByStatus(tasks)` in `src/lib/groupTasks.js` returning
`{ todo: [], 'in-progress': [], done: [] }` with each task in its bucket.
Handle empty/missing arrays. Add `src/lib/groupTasks.test.js`.

## 5. Status filter dropdown component
Create `src/components/StatusFilter.jsx`: a `<select>` with options
`all`, `todo`, `in-progress`, `done`. Takes a `value` prop and an `onChange`
callback. Named export, functional component only.

## 6. Task search box component
Create `src/components/TaskSearch.jsx`: a controlled text input taking `value`
and `onChange` props, with a placeholder "Search tasks…". Named export,
functional component only.

## 7. Task count summary component
Create `src/components/TaskSummary.jsx` that takes a `tasks` prop and renders
"X tasks — Y done" using `completionRate`/counts logic. Must not crash on an
empty array. Render it in the footer of `Dashboard.jsx`.

## 8. Priority support
Add an optional `priority` field (`'low' | 'high'`) to the sample data in
`src/data/tasks.js`, and add `countByPriority(tasks)` in
`src/lib/priorityStats.js` returning `{ low, high, none }` counts (tasks with no
priority count as `none`). Handle empty/missing arrays. Add
`src/lib/priorityStats.test.js`.
