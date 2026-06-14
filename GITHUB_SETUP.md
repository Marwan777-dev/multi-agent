# Running the agent team on GitHub (the "multi agents on git" part)

Do this AFTER the local demo works.

## 1. Push this repo to GitHub
```bash
git add .
git commit -m "Agent POC"
gh repo create agent-poc --private --source=. --push
```

## 2. Install the Claude GitHub App
Easiest way — inside Claude Code in this folder, run:
```
/install-github-app
```
It installs the app and sets up the secret for you. (You must be repo admin.)

Or manually: install https://github.com/apps/claude on the repo.

## 3. Add the API key secret
The GitHub Action needs an `ANTHROPIC_API_KEY` secret (the Action does not use
your $200 subscription — that's only for local runs).

- Get a key from https://console.anthropic.com (top up ~$5, plenty for a demo).
- Add it: repo → Settings → Secrets and variables → Actions → New secret →
  name `ANTHROPIC_API_KEY`.

## 4. Try it
Open a new GitHub Issue titled "Add task status chart", paste the body of
`TASK.md`, and add a line:

```
@claude implement this feature. Use the tech-lead to plan, the developer to
build, the qa-reviewer to review and run tests, and the bug-fixer to fix
anything QA finds. Open a PR when QA approves.
```

The Action runs the team on GitHub's servers and opens a Pull Request.

## Cost note for Dr. Amin
- **Local demo:** $0 (your Claude subscription).
- **GitHub Action demo:** a few cents per task (pay-as-you-go API). ~$5 lasts
  for weeks of testing.
- **GitHub Actions minutes:** free tier (~2000 min/month) is plenty.
