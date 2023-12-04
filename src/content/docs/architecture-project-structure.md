---
title: Project Structure
description: How to notify the user of something happening inside of the application
---

## Structure

- `src/lib/config` in this you can find both the documentation configuration and the app
  configuration
- `src/lib/core/ui/` is where you can find the core ui components. The core UI is provided by
  [shadcn-svelte](https://www.shadcn-svelte.com/)

  - **shorthand:** `$core/ui`

  - `cn` utility is located here as well

- `src/lib/components/` is where components that you build should go. The components here belong to
  the applications' domain.

  - **shorthand:** `$components/`

  - `app` is components for the main application
  - `docs` is the pre-built components for documentation, these include all of the Mdsvex components
    on how the documentation is rendering.
  - `marketing` contains the marketing website components

- `src/routes` is where the routes for sveltekit are located
- `src/content/docs` is where the docuentation lives
