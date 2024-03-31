const axios = require("axios");

module.exports = async function getDataApi(locationId) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  try {
    const response = await axios.get(
      `https://api.myquran.com/v2/sholat/jadwal/${locationId}/${formattedDate}`,
    );

    console.log("date:", formattedDate);
    return response.data;
  } catch (e) {
    return e;
  }
};
