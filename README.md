# Astro Email Template Example With Resend

This is an example of how you can use Resend in your Astro project to make email templates.

```
astros-email-templates-example
├─ .git
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-f3833b97ea646f6dcc9c10d6f5f000800cd95939.idx
│  │     ├─ pack-f3833b97ea646f6dcc9c10d6f5f000800cd95939.pack
│  │     └─ pack-f3833b97ea646f6dcc9c10d6f5f000800cd95939.rev
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .gitignore
├─ .vscode
│  ├─ extensions.json
│  └─ launch.json
├─ README.md
├─ astro.config.mjs
├─ package-lock.json
├─ package.json
├─ public
│  └─ favicon.svg
├─ src
│  ├─ components
│  │  ├─ AdminEmailTemplate.astro
│  │  ├─ Card.astro
│  │  └─ UserEmailTemplate.astro
│  ├─ env.d.ts
│  ├─ layouts
│  │  └─ Layout.astro
│  └─ pages
│     ├─ api
│     │  └─ send-email.json.ts
│     └─ index.astro
└─ tsconfig.json

```