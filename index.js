const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const cron = require("node-cron");

const userId = 1058754017;
const grupId = -849887444;
const now = new Date().toDateString();
const timeNow = new Date().toLocaleTimeString();

const text = `
jangan lupa minum air ya sekarang,
sekarang tanggal ${now}
jam ${timeNow}
semangat`;

cron.schedule("1 00 09 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});
cron.schedule("1 00 11 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});
cron.schedule("1 00 13 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});
cron.schedule("1 00 15 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});
cron.schedule("1 00 17 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});
cron.schedule("1 00 19 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});
cron.schedule("1 00 21 * * *", () => {
  bot.telegram.sendMessage(grupId, text);
});

bot.start((ctx) => {
  ctx.reply("apa kao");
});
bot.launch();

console.log("server running...");

