const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const cron = require("node-cron");

const grupId = process.env.GRUP_ID;

const time = () => {
  const now = new Date().toDateString();
  const timeNow = new Date().toLocaleTimeString();
  return (text = `
jangan lupa minum air ya sekarang, tanggal
${now} jam ${timeNow}
semangat !!`);
};

cron.schedule("1 00 09 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});
cron.schedule("1 00 11 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});
cron.schedule("1 00 13 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});
cron.schedule("1 00 15 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});
cron.schedule("1 00 17 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});
cron.schedule("1 00 19 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});
cron.schedule("1 00 21 * * *", () => {
  bot.telegram.sendMessage(grupId, time());
});

bot.start((ctx) => {
  ctx.reply(`ada yang bisa saya bantu ? `);
});
bot.launch();

console.log("server running...");
