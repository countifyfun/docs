---
sidebar_position: 2
---

import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# Getting Started

In just a few simple steps, you'll have Countify in your Discord server, ready to track and keep your counting channel organized. Let's dive in!

## Inviting Countify

### 1. Start the flow

Go to [countify.fun/invite](https://countify.fun/invite). It should redirect you to a page like this:

![Invite Example](/getting-started/invite-example.png)

### 2. Select your server

Select your server in the "Add to server" dropdown. You can also type to find your server. Once you've selected the server you want to invite Countify in, click "Continue". You should then see a page like this:

![Authorize Example](/getting-started/authorize-example.png)

### 3. Verify your permissions

Countify requests some basic permissions that are required to make most features work. But if you don't trust Countify with some permissions, you can deselect them by clicking on the permission. But if you don't know what to deselect, the defaults are fine.

Keep in mind that Countify requires `Manage Messages` in order to delete the wrong count messages.

Once you've verified Countify's permissions for your server, click "Authorize".

### 4. Done!

You should then see a page like this:

![Authorized Example](/getting-started/authorized-example.png)

This means that Countify is now in your server! If you check your member list, you should see that Countify is in the server.

![Countify in the server](/getting-started/countify-in-server.png)

## Setting up Countify

### 1. Run the command

To setup Countify in your server, run the `/setup` command in your server.

If you already have a counting channel with an established history, you can specify the `channel` and `count` Option.

### 2. Done!

After running the command, you should see a message from Countify that looks like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/setup" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">The counting system has been enabled in this server.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

<br />

That means that Countify has been enabled in your server. Congratulations!

## Problems?

If you encountered any problems while inviting or setting up Countify, make sure to [make an issue on GitHub](https://github.com/countifyfun/bot) or asking for help in [our Discord server](https://countify.fun/discord).
