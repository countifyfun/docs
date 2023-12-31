---
sidebar_position: 1
slug: .
---

import {
DiscordMessages as Discord,
DiscordMessage as Message,
DiscordReactions as Reactions,
DiscordReaction as Reaction,
DiscordEmbed as Embed,
DiscordEmbedDescription as EmbedDescription,
DiscordMention as Mention,
} from "@skyra/discord-components-react";

# Introduction

Countify is your dream Discord counting bot. It helps you keep your conuting channel neat and organized, whilst keeping everyone engaged and having fun.

## Features

Countify is not just your normal Discord counting bot. It also has features that make it unique.

### One-by-one

Only allow one count per user. This makes sure users don't spam to fill your counting channel.

<Discord>
  <Message profile="toasted">1</Message>
  <Message>2</Message>
  <Message profile="toasted">3</Message>
  <Message>4</Message>
  <Message profile="toasted">5</Message>
  <Message>6<span style={{ color: "red", display: "block" }}>7</span></Message>
</Discord>

### Reset on fail

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

### Free API

Track any counting channel with the Countify API. Completely for free, no paywalls, insane rate limits, or credit card required.

![Free API in action](/free-api.png)
