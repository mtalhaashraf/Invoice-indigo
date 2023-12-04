---
title: Marketing Website
description: How to install dependencies and structure your app.
---

## Content management

It's all fine and well that engineers can write markdown and commit it but we need something that
can be easy for non-engineers to use.

For recent projects we have used sanity.io, this will be need to be cached because the # of API
calls would simply be too great and the page would be too slow.

### Articles

We need to support articles with authors, and categories. We have chosen to name this authors and
not blogs because it seems a bit more professional and can play the blog part if it needs to.

Basics of an **article:**

- title
- subtitle
- author relationship
- tags
- updated at date: there is some benefit to having just one date in the eyes of google, it may get
  confused if there are two sets of dates
- read time: calculated by some random package but really its just 183 WPM

#### Technical SEO

We will need:

- LD+JSON
- OpenGraph
  - title
  - snippet
  - image

---

```typescript
const ld: WithContext<Article> = {
  "@context": "https://schema.org",
  "@type": "Article",
  datePublished: data.frontmatter.date,
  dateModified: data.frontmatter.updatedAt,
  headline: data.frontmatter.title,
  author: {
    "@type": "Person",
    name: "Bradford Toney"
  }
}
```
