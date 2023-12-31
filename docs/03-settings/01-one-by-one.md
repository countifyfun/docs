import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# One by One

Only allow one count per user. This makes sure users don't spam to fill your counting channel.

<Discord>
  <Message profile="toasted">1</Message>
  <Message>2</Message>
  <Message profile="toasted">3</Message>
  <Message>4</Message>
  <Message profile="toasted">5</Message>
  <Message>6<span style={{ color: "red", display: "block" }}>7</span></Message>
</Discord>

## Enable

To enable one by one, run `/settings one_by_one`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings one_by_one" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Enabled one by one.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Disable

To disable one by one, run `/settings one_by_one` again. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings one_by_one" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Disabled one by one.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
