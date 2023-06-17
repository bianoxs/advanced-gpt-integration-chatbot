
import { createRequire } from "module";
import { ChatGPTAPI } from "chatgpt";

const require = createRequire(import.meta.url);
const config = require("./config.json");
const { Client, GatewayIntentBits } = require("discord.js");

var processing = false;
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
  ],
});

const api = new ChatGPTAPI({
  sessionToken: config.OAISession,
});

const conversation = api.getConversation();

client.on("messageCreate", async (message) => {
  if (
    message.author.bot ||
    message.content.includes("@here") ||
    message.content.includes("@everyone") ||
    (config.channelsWhitelist.length > 0 &&
      !config.channelsWhitelist.includes(message.channel.id))
  )
    return false;