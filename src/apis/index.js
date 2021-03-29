import axios from "axios";

export const fetchData = async () => {
  const url = "https://covid19.mathdro.id/api";
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(url).catch((err) => console.log(err));

  return { confirmed, recovered, deaths, lastUpdate };
};
