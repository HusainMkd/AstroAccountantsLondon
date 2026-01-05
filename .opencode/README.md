# OpenCode GitHub App Setup

This folder contains configuration for the [OpenCode GitHub App](https://opencode.ai/docs/github/), which lets you trigger OpenCode via `/oc` or `/opencode` comments in GitHub issues and PRs.

## How It Works

1. The `.github/workflows/opencode.yml` workflow triggers on issue/PR comments
2. It restores your Antigravity OAuth tokens from GitHub Secrets
3. OpenCode runs with the config from this `.opencode/` folder

## Setup for a New Repository

### 1. Copy the files

Copy these folders to your new repo:

- `.github/workflows/opencode.yml`
- `.opencode/` (entire folder)

### 2. Add the Antigravity Accounts Secret

Your OAuth tokens are stored locally at:

- **Windows:** `%APPDATA%\opencode\antigravity-accounts.json`
- **macOS/Linux:** `~/.config/opencode/antigravity-accounts.json`

Add this file's contents as a GitHub secret:

**Option A: Via GitHub CLI (recommended)**

```bash
# Windows PowerShell
gh secret set ANTIGRAVITY_ACCOUNTS --repo YOUR_USERNAME/YOUR_REPO --body (Get-Content "$env:APPDATA\opencode\antigravity-accounts.json" -Raw)

# macOS/Linux
gh secret set ANTIGRAVITY_ACCOUNTS --repo YOUR_USERNAME/YOUR_REPO < ~/.config/opencode/antigravity-accounts.json
```

**Option B: Via GitHub Web UI**

1. Go to your repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `ANTIGRAVITY_ACCOUNTS`
4. Value: Paste the entire contents of your `antigravity-accounts.json` file
5. Click "Add secret"

### 3. Install the OpenCode GitHub App

Make sure the OpenCode GitHub App is installed on your repo:
https://github.com/apps/opencode-agent

### 4. Test It

Comment `/opencode hello` on any issue or PR in your repo.

## Bulk Setup (All Repos)

To add the secret to multiple repos at once:

```powershell
# Windows PowerShell - Add secret to all your repos
$repos = gh repo list --limit 100 --json nameWithOwner -q '.[].nameWithOwner'
$content = Get-Content "$env:APPDATA\opencode\antigravity-accounts.json" -Raw
foreach ($repo in $repos) {
    Write-Host "Adding secret to $repo"
    gh secret set ANTIGRAVITY_ACCOUNTS --repo $repo --body $content
}
```

```bash
# macOS/Linux - Add secret to all your repos
for repo in $(gh repo list --limit 100 --json nameWithOwner -q '.[].nameWithOwner'); do
    echo "Adding secret to $repo"
    gh secret set ANTIGRAVITY_ACCOUNTS --repo "$repo" < ~/.config/opencode/antigravity-accounts.json
done
```

## Files Overview

| File                  | Purpose                                          |
| --------------------- | ------------------------------------------------ |
| `opencode.json`       | OpenCode plugins and model configuration         |
| `oh-my-opencode.json` | Agent model assignments (Sisyphus, Oracle, etc.) |
| `README.md`           | This file                                        |

## Updating Your Tokens

If you add new Google accounts or your tokens expire:

1. Run `opencode auth login` locally to refresh tokens
2. Re-run the secret setup commands above for affected repos

## Troubleshooting

- **"Model not found"**: Ensure the antigravity plugin version matches in `opencode.json`
- **"Authentication failed"**: Re-copy your `antigravity-accounts.json` to the secret
- **Workflow not triggering**: Check that the OpenCode GitHub App is installed on the repo
