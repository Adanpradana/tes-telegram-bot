// require("dotenv").config();
// const bot = new Telegraf(process.env.BOT_TOKEN);
// const cron = require("node-cron");
// const getDataApi = require("./handler/index");
// const { imsak, maghrib } = require("./handler/scheduler");
//
// const grupId = process.env.GRUP_ID;
//
// cron.schedule("00 04 * * * ", async () => {
//   const timeSchedule = ["imsak", "subuh", "maghrib"];
//   const malang = await getDataApi("1634");
//   const sumenep = await getDataApi("1626");
//   const jakarta = await getDataApi("1301");
//   const groupedData = [malang, sumenep, jakarta];
//   if (groupedData.length !== 0) {
//     await imsak(groupedData, bot, grupId);
//   }
// });
// cron.schedule("00 16 * * * ", async () => {
//   const timeSchedule = ["imsak", "subuh", "maghrib"];
//   const malang = await getDataApi("1634");
//   const sumenep = await getDataApi("1626");
//   const jakarta = await getDataApi("1301");
//   const groupedData = [malang, sumenep, jakarta];
//   if (groupedData.length !== 0) {
//     await maghrib(groupedData, bot, grupId);
//   }
// });
//
// bot.start(async (ctx) => {
//   const malang = await getDataApi("1634");
//   const sumenep = await getDataApi("1626");
//   const jakarta = await getDataApi("1301");
//   ctx.reply("tes");
// });
// bot.launch();
//
// console.log("server is running...");
const requestData = require("./scheduler");
const cron = require("node-cron");

const botStart = (bot, cron, groupId) => {
  cron.schedule("00 03 * * * ", async () => {
    requestData(bot, groupId);
    await bot.api.sendMessage(groupId, "waktunya sahorrr 🍜");
  });
};
module.exports = {
  botStart,
};
