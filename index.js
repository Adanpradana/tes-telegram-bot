const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const cron = require("node-cron");
const getDataApi = require("./handler/index");
const { imsak, maghrib } = require("./handler/scheduler");

const grupId = process.env.GRUP_ID;

const now = new Date().toDateString();
const timeNow = new Date().toLocaleTimeString();

cron.schedule("00 04 * * * ", async () => {
  const timeSchedule = ["imsak", "subuh", "maghrib"];
  const malang = await getDataApi("1634");
  const sumenep = await getDataApi("1626");
  const jakarta = await getDataApi("1301");
  const groupedData = [malang, sumenep, jakarta];
  if (groupedData.length !== 0) {
    await imsak(groupedData, bot, grupId, timeSchedule);
  }
});
cron.schedule("00 16* * * ", async () => {
  const timeSchedule = ["imsak", "subuh", "maghrib"];
  const malang = await getDataApi("1634");
  const sumenep = await getDataApi("1626");
  const jakarta = await getDataApi("1301");
  const groupedData = [malang, sumenep, jakarta];
  if (groupedData.length !== 0) {
    await maghrib(groupedData, bot, grupId, timeSchedule);
  }
});

bot.start(async (ctx) => {
  const malang = await getDataApi("1634");
  const sumenep = await getDataApi("1626");
  const jakarta = await getDataApi("1301");
  ctx.reply("tes");
});
bot.launch();

console.log("server is running...");
