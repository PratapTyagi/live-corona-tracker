import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changableUrl = url;

  if (country) {
    changableUrl = `${url}/countries/${country}`;
  }

  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changableUrl).catch((err) => console.log(err));

  return { confirmed, recovered, deaths, lastUpdate };
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios
      .get(`${url}/daily`)
      .catch((err) => console.log(err));
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
