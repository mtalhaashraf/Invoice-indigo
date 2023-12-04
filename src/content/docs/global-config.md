---
title: Global Configuration
description: App's global configuration
---

The starter kit should have some global settings that can be tweaked to get an initial difference
from the other products. This will include colors, radiuses on cards and of course things like site
name and site url.

### Global env variables

- Site name
- Site URL
- Google OAuth Key
- Global brand colors

Must support global brand colors in one place e.g. `--primary`

shadcn-svelte supports color variables like so and has a color picker on their site.

### Example

```ts
export const siteConfig = {
  name: "foghorn",
  url: "https://shadcn-svelte.com",
  ogImage: "https://shadcn-svelte.com/og.png",
  description: "",
  links: {
    twitter: "",
    github: "",
    shadTwitter: "",
    shadGithub: ""
  },
  keywords: ``
}

export type SiteConfig = typeof siteConfig
```
