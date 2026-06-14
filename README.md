# Agent POC — Multi-Agent Dev Team on Git

A Proof of Concept for Dr. Amin: a **team of AI agents** that takes a feature
from **planning → development → QA review → bug fixing**, working on a real
codebase and (optionally) opening a Pull Request on GitHub.

This is intentionally a tiny throwaway project. The point is to prove the
**workflow**, not to build a real app.

## The agent team

| Role (Dr. Amin's request) | Agent file | What it does |
|---|---|---|
| Leader — يوزع الشغل | (main Claude session) | Reads the task, splits it, delegates |
| Tech Lead | `.claude/agents/tech-lead.md` | Plans the feature, breaks it into tasks |
| Developer | `.claude/agents/developer.md` | Writes the actual code |
| QA / Reviewer | `.claude/agents/qa-reviewer.md` | Reviews code against `CLAUDE.md`, runs tests, finds bugs |
| Bug Fixer | `.claude/agents/bug-fixer.md` | Fixes the bugs QA reports |

The standards QA reviews against live in `CLAUDE.md`.

## How to run the demo LOCALLY (free, uses your Claude subscription)

1. Install deps once:
   ```bash
   npm install
   ```
2. Open Claude Code in this folder:
   ```bash
   claude
   ```
3. Paste the demo task (see `TASK.md`) or just say:
   > Implement the feature described in TASK.md. Use the tech-lead to plan it,
   > the developer to build it, the qa-reviewer to review and run tests, and the
   > bug-fixer to fix anything QA finds. Loop until QA approves.

4. Watch the team work: plan → code → review → fix → approve.
5. Run the app/tests yourself to confirm:
   ```bash
   npm test
   npm run dev
   ```

## How to run it on GitHub (the "multi agents on git" part)

See `.github/workflows/claude.yml`. Once set up, you open a GitHub Issue
describing a feature and comment `@claude implement this`. The action runs the
same team on GitHub's servers and opens a Pull Request with the result.

Setup steps are in `GITHUB_SETUP.md`.
