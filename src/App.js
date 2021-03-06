import React, { useState, useEffect } from "react";
import CoronaImage from "./images/image.png";

import styles from "./App.module.css";

import { fetchData } from "./apis";
import { Cards, Charts, CountryPicker } from "./components";

function App() {
  const [data, setData] = useState({});
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    fetchData()
      .then((info) => setData(info))
      .catch((err) => console.log(err));
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountryName(country);
  };

  return (
    <div className={styles.container}>
      <img
        src={CoronaImage}
        alt="Corona virus tracker"
        className={styles.image}
      />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data} />
      <Charts data={data} country={countryName} />
    </div>
  );
}

export default App;
