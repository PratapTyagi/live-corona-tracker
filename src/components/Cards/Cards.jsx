import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";
import cx from "classnames";

function Cards({ data: { confirmed, deaths, recovered, lastUpdate } }) {
  if (!confirmed || !deaths || !recovered || !lastUpdate) return "LOADING...";
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varient="h4">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">Active cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varient="h4">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">Recovered cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varient="h4">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                seperator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography varient="body2">No. of deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
