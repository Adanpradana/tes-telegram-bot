const cron = require("node-cron");

async function imsak(data, bot, grupId) {
  data.forEach((schedule) => {
    try {
      const [hours, minutes] = schedule.data.jadwal.imsak.split(":");
      const cronSchedule = `${minutes} ${hours} * * *`;

      // Schedule a cron job based on imsakTime
      cron.schedule(cronSchedule, async () => {
        await bot.api.sendMessage(
          grupId,
          `waktunya imsak  ${schedule.data.lokasi} dan sekitarnya `,
        );
        // Your task logic here
      });
    } catch (error) {
      console.error("Error scheduling task:", error);
    }
  });
}
async function maghrib(data, bot, grupId) {
  data.forEach((schedule) => {
    try {
      const [hours, minutes] = schedule.data.jadwal.maghrib.split(":");
      const cronSchedule = `${minutes} ${hours} * * *`;

      // Schedule a cron job based on imsakTime
      cron.schedule(cronSchedule, async () => {
        await bot.api.sendMessage(
          grupId,
          `selamat berbuka puasa  ${schedule.data.lokasi} dan sekitarnya ✨🎉`,
        );
        // Your task logic here
      });
    } catch (error) {
      console.error("Error scheduling task:", error);
    }
  });
}

module.exports = { imsak, maghrib };
