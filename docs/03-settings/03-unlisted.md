import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# Unlisted

When your server is set to unlisted, your server won't appear on [our server list](https://countify.fun/servers), and will only be accessible by its ID.

![Unlisting in action](/unlisted.png)

## Enable

To set your server to unlisted, run `/settings unlisted`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings unlisted" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">This server is now unlisted.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Disable

To set your server to public, run `/settings unlisted` again. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings unlisted" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">This server is now public.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
