import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordSystemMessage as SystemMessage,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# Pin Milestones

Pin a message every time a new milestone is reached. (10, 20, 30, 40, 50, etc.)

<Discord>
  <Message>1995</Message>
  <Message profile="toasted">1996</Message>
  <Message>1997</Message>
  <Message profile="toasted">1998</Message>
  <Message>1999</Message>
  <Message profile="toasted">2000</Message>
  <SystemMessage type="pin"><i>Countify</i> pinned <i>a message</i> to this channel. See all <i>pinned messages</i>.</SystemMessage>
</Discord>

## Enable

To enable milestone pinning, run `/settings pin_milestones`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings pin_milestones" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Enabled milestone pinning.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Disable

To disable milestone pinning, run `/settings pin_milestones` again. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings pin_milestones" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Disabled milestone pinning.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
