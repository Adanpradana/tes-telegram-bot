const getDataApi = require("../handler/fetchj");
const { imsak, maghrib } = require("../handler/jadwal");
const requestData = async (bot, groupId) => {
  const malang = await getDataApi("1634");
  const sumenep = await getDataApi("1626");
  const jakarta = await getDataApi("1301");
  const groupedData = [malang, sumenep, jakarta];
  if (groupedData.length !== 0) {
    await imsak(groupedData, bot, groupId);
    await maghrib(groupedData, bot, groupId);
  }
};

module.exports = requestData;
