import React, { useContext } from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import useStyle from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "./../../context/context";
import InfoCard from "./../InfoCard";

const Main = () => {
  const calsses = useStyle();

  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={calsses.root}>
      <CardHeader title="Expense Tracker" subheader="Powerd by speachly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balanace ${balance}
        </Typography>
        <Typography variant="subtitle1" style={{ lineHeight: "1.5rem", marginTop: "20px" }}>
          <InfoCard />
        </Typography>
        <Divider />
        <Form />
        <CardContent className={calsses.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Main;
