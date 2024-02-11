import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# Visibility

If your server's visibility is set to `public`, it will show up on [our server list](https://countify.fun/servers). If your server's visibility is set to `unlisted`, your server won't appear on [our server list](https://countify.fun/servers), and will only be accessible by its ID.

![Unlisting in action](/unlisted.png)

## Set to unlisted

To set your server's visibility to unlisted, run `/settings visibility` and select `Unlisted`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings visibility" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">This server is now unlisted.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Set to public

To set your server's visibility to public, run `/settings visibility` and select `Public`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings visibility" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">This server is now public.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
