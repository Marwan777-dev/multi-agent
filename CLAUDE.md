# Project standards

These are the rules every agent must follow. The QA reviewer checks code
against this file before approving.

## Team workflow (runs ONLY for the `/feature` command)

Run this multi-agent loop **only when the work is invoked through the
`/feature` command**. For any other request — including plain-chat asks to make
a change, tweak a style, or fix a small bug — do NOT spin up the agent team;
just make the edit directly (still following the Code style and Quality bar
rules below). If a plain request looks big enough to warrant the full team,
suggest running it through `/feature` rather than triggering the loop yourself.

When `/feature` is used, run this loop — you do not need to be told to use the
agents by name:

1. **tech-lead** — plan the work and break it into tasks.
2. **developer** — implement the plan.
3. **qa-reviewer** — review the code against this file and run `npm test`.
4. If QA returns CHANGES REQUESTED → **bug-fixer** fixes the listed issues,
   then go back to step 3.
5. Repeat until QA returns APPROVED. Only then is the work done.

On GitHub, open a Pull Request with the result once QA approves.

## Code style
- JavaScript / React, functional components only (no class components).
- Use named exports for components.
- Keep components small and focused; one component per file.
- No `console.log` left in committed code.
- No unused variables or imports.

## Quality bar
- Every new utility function in `src/lib/` must have a matching test in the same
  folder (`*.test.js`).
- All tests must pass (`npm test`) before QA approves.
- Handle empty / missing data gracefully (no crashes on empty arrays).

## Definition of done
- Code does what the linked issue / PR description asks.
- Tests pass (`npm test`) and the app builds (`npm run build`).
- Code follows the style rules above; no lint or type errors.
- No secrets or debug code committed.
- Reviewer (human or qa-reviewer) has approved.
