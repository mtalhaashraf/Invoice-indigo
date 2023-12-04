---
title: Billing
description: Re-usable components built with Bits UI, Melt UI, and Tailwind CSS.
---

## Stripe

Stripe is the way to go for the basics.

### Event Hooks to handle

- `checkout.session.completed`
- `stripe.checkout.session.async_payment_succeeded`
- `checkout.session.expired`
  - send 'abandoned cart' email with checkout recovery link
- `customer.source.expiring`
  - send email to billing portal to update payment method
- `customer.subscription.deleted`
  - revoke access + send win-back email
- `customer.subscription.updated`
  - called when initiating a cancel_at_period_end cancellation
- `radar.early_fraud_warning.created`
  - pro-actively cancel subscription and refund
- `invoice.payment_action_required`
- `customer.subscription.trial_will_end`
- `invoice.payment.failed`
  - send email with invoice link

### Misc

Change pricing:

- https://github.com/timb-103/stripe-plan-change/tree/master/src

### Jobs

- On payment: when a payment is made the internal team is notified. This is not run as part of the
  payment because it could be fallible.
