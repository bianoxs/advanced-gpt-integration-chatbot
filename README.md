
# Advanced Discord chatbot with GPT-3 Integration

_This README was partially written with the help of GPT-3._

The program is a Discord bot that takes advantage of the [chatgpt library](https://github.com/transitive-bullshit/chatgpt-api) to integrate GPT-3 capabilities into Discord chats. This allows users to communicate with the bot and get real-time responses generated by GPT-3.

![imageedit_1_9483451562](https://user-images.githubusercontent.com/8215580/206561946-c9ac8ad0-e5cf-4b65-909e-d006c8837715.png)

ChatGPT is a large-scale language model trained by OpenAI for the purpose of providing an entertaining chat experience. Please remember that it isn't a substitute for professional guidance, and its responses may not be entirely accurate or reliable. Use it responsibly.

## Features

- Direct interaction with ChatGPT on your Discord server
- Get everyone in your server involved in conversations
- Experience engaging, natural conversation with OpenAI's state-of-the-art language model
- Easy to use – just mention the bot in a channel and start chatting

## Installation

1. Create a [new discord application](https://discord.com/developers/applications) and invite it to your Discord server.
2. Install the chatbot using NPM:

```bash

# Clone repository
git clone https://github.com/bianoxs/advanced-gpt-integration-chatbot.git

# CD into directory
cd advanced-gpt-integration-chatbot

# Install dependencies
npm install

```

3. Then adjust the config.json to include your [Discord Bot Token](https://discord.com/developers/applications), [OpenAI Session](https://github.com/transitive-bullshit/chatgpt-api#session-tokens), [Application ID](https://discord.com/developers/applications), and the channel and user IDs (if you want to limit the bot's access).

```json

{  "channelsWhitelist": [],
  "usersWhitelist": [
    "0000000000000000000",
    "0000000000000000000",
    "0000000000000000000"
  ],
  "OAISession": "YOUR-OPENAI-SESSION-HASH",
  "discordToken": "YOUR-DISCORD-TOKEN",
  "botID": "BOT-ID",
  "processingMessage": "Waiting for a response from OpenAI",
  "waitingMessage": "I am currently generating a response for another user, please wait",
  "accessMessage": "You do not have permission to communicate with OpenAI, contact the server administrator"
}
