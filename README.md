# master-bar

A single bar above the prompt box in the Claude Desktop app (Code tab). It shows two rings, your 5-hour and 7-day usage limits, with the percent used inside each ring and the time until it resets, read straight from Claude Code's own numbers. Reading them calls no model.

It also has a **Master prompt** button. Type a draft, click Master prompt (it arms), then press Enter: instead of sending, the draft is rewritten by Haiku into a clearer, somewhat more ambitious prompt and put back in the box for you to read and edit before sending. Starting a prompt with `master:` does the same without the button. **Undo** puts your original draft back. Each rewrite is one Haiku call and counts toward your usage.

## Install

At the prompt of a terminal Claude Code session:

```
/plugin install master-bar --marketplace AFAY08/master-bar
```

From a shell:

```
claude plugin install master-bar --marketplace AFAY08/master-bar
```

Answer `y` to add the marketplace, then pick the user scope. Installed at the user scope from a terminal, it also loads in the Desktop app's local sessions.

In the Desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `AFAY08/master-bar`, then Add plugin.

### Cloud sessions

A cloud session starts in a fresh container, so a plugin installed on your computer does not reach it. Add these lines to your cloud environment's setup script to install it in every new cloud session:

```
if command -v claude >/dev/null 2>&1; then
  claude plugin marketplace add AFAY08/master-bar || true
  claude plugin install master-bar@master-bar --scope user || true
fi
```
