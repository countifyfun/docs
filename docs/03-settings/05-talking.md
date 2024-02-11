import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# Talking

Whether members can talk to each other in the counting channel.

<Discord>
  <Message profile="toasted">1</Message>
  <Message>2</Message>
  <Message profile="toasted">3</Message>
  <Message>4</Message>
  <Message profile="toasted">5</Message>
  <Message>6</Message>
  <Message profile="toasted">7</Message>
  <Message>8</Message>
  <Message profile="toasted">9</Message>
  <Message><span style={{ color: "red", display: "block" }}>10 woohoo!</span></Message>
</Discord>

## Enable

To allow talking, run `/settings talking`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings talking" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Enabled talking.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Disable

To disallow talking, run `/settings talking` again. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings talking" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Disabled talking.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
