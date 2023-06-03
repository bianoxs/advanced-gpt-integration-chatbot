
import { createRequire } from "module";
import { ChatGPTAPI } from "chatgpt";

const require = createRequire(import.meta.url);
const config = require("./config.json");
const { Client, GatewayIntentBits } = require("discord.js");

var processing = false;