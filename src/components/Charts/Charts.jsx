import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../apis";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Charts.module.css";

function Charts({ data: { confirmed, deaths, recovered }, country }) {
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

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(100, 100, 250, 0.5)",
              "rgba(250, 100, 100, 0.5)",
              "rgba(100, 250, 100, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
}

export default Charts;
