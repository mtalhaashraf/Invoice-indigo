---
title: User Notifications
description: How to notify the user of something happening inside of the application
---

<script lang="ts">
  import * as Alert from "$lib/components/ui/alert";
  import { AlertTriangle } from "lucide-svelte";
</script>

## Notification patterns (UX)

### Intrinsic notifications

These are considered as the notifications generated within the system or application as a result of
user actions or system events.

- when the user creates an item
- when the user deletes an item, and the server says that it is successful (after confirming that it
  is safe to delete)
- when the user does an action and that action fails

We will use **toast** to show the user that this type of action has happened.

### Extrinsic notifications

These refer to the notifications that are generated outside of the direct user-system interaction,
typically triggered by changes in the external environment or third-party integrations. For
instance, a credit card payment failing or another user leaving a comment on an item.

- system notifications of changes to their account
- other users taking some action that may affect them e.g. a comment on their post

for this the recommended UX pattern will be having a **notification pane**.

<Alert.Root class="mt-8"> <AlertTriangle class="h-4 w-4" /> <Alert.Title>Heads up!</Alert.Title>
<Alert.Description> Discuss when an alert (this) comes into play</Alert.Description> </Alert.Root>

## Forms

Use superform messages to notify users when:

> https://superforms.rocks/concepts/messages

You can see an example in `src/components/app/auth/form-login.svelte`.

## Display

We use toast to show flashes to the user, currently we use `svelte-sonner` but styling is limited so
we will likely move off of that.
