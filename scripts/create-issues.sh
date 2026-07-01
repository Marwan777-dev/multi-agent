#!/usr/bin/env bash
#
# Turn a spec file into GitHub issues, one per "## " section, each labeled
# `agent`. The `agent` label auto-triggers .github/workflows/claude.yml — the
# multi-agent team runs on every labeled issue with NO need to type @claude.
# All issues fire in parallel, each opening its own PR.
#
# This script is REUSABLE: it never hardcodes tasks. The team edits the spec,
# not this file. Each `## Heading` in the spec becomes one issue (title = the
# heading, body = the lines under it until the next `## `).
#
# Usage:  ./scripts/create-issues.sh [path-to-spec]   # defaults to SPEC.md
# Needs:  gh CLI authenticated (`gh auth status`) with repo access.
#         Set DRY_RUN=1 to print what would be created without touching GitHub.

set -euo pipefail

SPEC="${1:-SPEC.md}"
LABEL="agent"

[[ -f "$SPEC" ]] || { echo "Spec file not found: $SPEC" >&2; exit 1; }

# 1. Make sure the trigger label exists (no-op if it already does).
if [[ "${DRY_RUN:-0}" != "1" ]]; then
  gh label create "$LABEL" \
    --color "5319e7" \
    --description "Auto-run the Claude multi-agent team on this issue" \
    2>/dev/null || echo "Label '$LABEL' already exists — continuing."
fi

# 2. Create one issue. The `agent` label is what actually triggers the workflow;
#    the appended instruction just reminds the team what CLAUDE.md expects.
create () {
  local title="$1" body="$2"
  if [[ "${DRY_RUN:-0}" == "1" ]]; then
    echo "── would create issue: $title"
    return
  fi
  gh issue create \
    --title "$title" \
    --label "$LABEL" \
    --body "$body

Implement this task using the multi-agent team workflow defined in CLAUDE.md
(tech-lead → developer → qa-reviewer → bug-fixer, looping until APPROVED), then
open a PR. Follow CLAUDE.md: lib utilities need matching *.test.js, and npm test
must pass."
  # Small stagger so the triggered workflow runs don't hit the API at once.
  sleep 2
}

# 3. Parse the spec: every line starting with "## " opens a new issue.
count=0
title=""
body=""
flush () {
  [[ -n "$title" ]] || return 0
  create "$title" "$body"
  count=$((count + 1))
}

while IFS= read -r line; do
  if [[ "$line" == "## "* ]]; then
    flush
    title="${line#'## '}"
    # Drop a leading "N. " numbering if present (e.g. "1. Sort tasks" -> "Sort tasks").
    [[ "$title" =~ ^[0-9]+\.\ (.*)$ ]] && title="${BASH_REMATCH[1]}"
    body=""
  elif [[ -n "$title" ]]; then
    body+="$line"$'\n'
  fi
done < "$SPEC"
flush

echo ""
echo "Done. Created $count issue(s) labeled '$LABEL' from $SPEC."
[[ "${DRY_RUN:-0}" == "1" ]] || echo "Watch the runs:  gh run list --workflow=claude.yml"
