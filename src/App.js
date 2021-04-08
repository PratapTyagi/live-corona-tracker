import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

import { fetchData } from "./apis";
import { Cards, Charts, CountryPicker } from "./components";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData()
      .then((info) => setData(info))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Charts />
    </div>
  );
}

export default App;
