import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
import useTransactions from "./../../useTransactions";

const Details = ({ title }) => {
  const calsses = useStyles();

  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? calsses.income : calsses.expense}>
      <CardHeader title={title}></CardHeader>
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
