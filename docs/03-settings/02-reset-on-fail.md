import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordReactions as Reactions,
DiscordReaction as Reaction,
DiscordMention as Mention,
DiscordCommand as Command,
} from "@skyra/discord-components-react";

# Reset on Fail

The moment someone fails to get the count right (or fails through other ways, such as counting more than once if one-by-one is enabled), the count will immediately be reset back to 0.

<Discord>
  <Message profile="toasted">1<Reactions slot="reactions"><Reaction name="✅" emoji="/reactions/white_check_mark.svg"></Reaction></Reactions></Message>
  <Message>2<Reactions slot="reactions"><Reaction name="✅" emoji="/reactions/white_check_mark.svg"></Reaction></Reactions></Message>
  <Message profile="toasted">3<Reactions slot="reactions"><Reaction name="✅" emoji="/reactions/white_check_mark.svg"></Reaction></Reactions></Message>
  <Message>4<Reactions slot="reactions"><Reaction name="✅" emoji="/reactions/white_check_mark.svg"></Reaction></Reactions></Message>
  <Message profile="toasted">6<Reactions slot="reactions"><Reaction name="❌" emoji="/reactions/x.svg"></Reaction></Reactions></Message>
  <Message profile="countify">
    <Embed slot="embeds" embedTitle="x  Oh no!" color="#FF4747">
      <EmbedDescription slot="description"><Mention>ToastedToast</Mention> got the count wrong. The count has been reset to 0!</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Enable

To enable reset on fail, run `/settings reset_on_fail`. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings reset_on_fail" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Enabled reset on fail.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>

## Disable

To disable reset on fail, run `/settings reset_on_fail` again. You should then see a message from Countify like this:

<Discord>
  <Message profile="countify">
    <Command slot="reply" command="/settings reset_on_fail" profile="toasted" />
    <Embed slot="embeds" embedTitle="check  Success!" color="#64DE34">
      <EmbedDescription slot="description">Disabled reset on fail.</EmbedDescription> 
    </Embed>
  </Message>
</Discord>
