---
title: Logging
description: Best practices for logging
---

<script lang="ts">
  import * as Alert from "$lib/components/ui/alert";
</script>

## Naming Consistency

For all logging statements we should apply the following:

- `url`: The URL where the logging was run at
- `requestId`: As a request comes in, it will be assigned a unique ID. This unique ID will follow
  the request through the application. This will help tie the different pieces of the request
  together.

<Alert.Root class="mt-8"> <Alert.Title>Heads up!</Alert.Title> <Alert.Description> We do not have a
request ID yet and we do not log in middleware </Alert.Description> </Alert.Root>

### Other common items

- `error`: String representation of error
- `remoteAddr`: For financial and authentication systems we should log the ip address

## Security

We want to log the user's IP address, email, user id (if applicable) for the following:

- Authentication
  - Login
  - Password Reset
  - Account Creation
- Billing
  - Update account
