import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordCommand as Command,
DiscordMention as Mention
} from "@skyra/discord-components-react";

# No Deletion

Resend the last count if it gets deleted.

<Discord>
  <Message profile="toasted">1</Message>
  <Message>2</Message>
  <Message profile="toasted">3</Message>
  <Message>4</Message>
  <Message profile="toasted">5</Message>
  <Message><span style={{ color: "red", display: "block" }}>6</span></Message>
  <Message profile="countify"><Mention>User</Mention>: 6</Message>
</Discord>

## Enable

To enable no deletion, run `/settings no_deletion`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings no_deletion" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Enabled no deletion.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Disable

To disable no deletion, run `/settings no_deletion` again. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings no_deletion" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Disabled no deletion.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
