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
