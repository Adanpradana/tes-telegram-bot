const express = require("express");
const { Bot, webhookCallback } = require("grammy");
const cron = require("node-cron");
const { botStart } = require("./bot");
const requestData = require("./scheduler");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);
const groupId = process.env.GROUP_ID;
const PORT = process.env.PORT || 3000;

bot.command("start", (ctx) => {
  ctx.reply("halo");
  requestData(bot, groupId);
});
if (process.env.NODE_ENV === "production") {
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, "express"));

  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  botStart(bot, cron, groupId);
  bot.start();
  console.log("ready on polling server...");
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
