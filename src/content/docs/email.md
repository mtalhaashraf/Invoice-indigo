---
title: Email
description: Re-usable components built with Bits UI, Melt UI, and Tailwind CSS.
---

We need an email system that we can use system wide

## Requirements

- 1 core template

  - single column layout

- N pre-made templates for authentication
  - Forgot password
  - Welcome email

## Email service provider

- **resend:** is what i used last on Cassie (Aegis)
- Nodemailer
- SendGrid
- Postmark
- AWS SES

### Mailer

```typescript
export interface MailerOptions {
  from?: string;
  cc?: string | string[];
  bcc?: string | string[];
}

export interface Mailer {
  sendNow: async function(to: string, opts: MailerOptions);
}


const marketingMailer: Mailer = {
  // use a separate domain for marketing in case we
  // burn the domain from a spam perspective
  from: 'mktg@mkting.bob.com'
  sendNow: async () => {}
}


const appMailer: Mailer = {
  from: 'info@bob.com'
  sendNow: async () => {}
}

```

In another file e.g. lib/mailers/authentication.ts

```typescript
import { mailer } from "./mailer"

const welcomeEmail = async (user: User, options: MailerOptions) => {
  const subject = "Welcome to our platform"
  const recipient = user.email
  const body = `Dear ${user.firstName}, welcome to our platform! We are happy to have you here.`

  return mailer.sendEmail(recipient, subject, body)
}
```

Example usage:

```typescript
import AuthenticationMailer from "@/lib/mailers/authentication.ts"

async function createAccount() {
  await AuthenticationMailer.welcomeEmail(user)
}
```

for the actual email layout i think we can use: https://github.com/carstenlebek/svelte-email
