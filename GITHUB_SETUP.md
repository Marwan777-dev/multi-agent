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

## 3. Add the auth secret
The GitHub Action needs a credential. You can use your Claude Pro/Max
subscription (no API credits required) — this is what we use:

- Run `claude setup-token` locally. It generates a long-lived OAuth token
  (requires a Pro/Max login).
- Add it: repo → Settings → Secrets and variables → Actions → New secret →
  name `CLAUDE_CODE_OAUTH_TOKEN`, value = the token.

The workflow (`.github/workflows/claude.yml`) reads this secret via
`claude_code_oauth_token`. Usage counts against your subscription's rate
limits (the same limits you hit locally), not pay-per-token.

> Alternative — pay-as-you-go API key: get one from
> https://console.anthropic.com, add it as an `ANTHROPIC_API_KEY` secret, and
> swap the workflow input back to `anthropic_api_key`. Don't set both — a
> static API key takes precedence over the OAuth token.

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
- **GitHub Action demo:** $0 when using the `CLAUDE_CODE_OAUTH_TOKEN` from your
  Pro/Max subscription — it draws on your subscription's rate limits, not
  pay-per-token. (If you switch to the `ANTHROPIC_API_KEY` path instead, it's a
  few cents per task; ~$5 lasts for weeks.)
- **GitHub Actions minutes:** free tier (~2000 min/month) is plenty.
