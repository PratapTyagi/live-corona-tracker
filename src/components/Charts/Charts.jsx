import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../apis";
import { Line } from "react-chartjs-2";

import styles from "./Charts.module.css";

function Charts() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    fetchDailyData()
      .then((data) => setDailyData(data))
      .catch((err) => console.log(err));
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#4444ee",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            backgroundColor: "rgba(255, 100, 100, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
}

export default Charts;
