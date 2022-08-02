import React from "react";
import Details from "./components/Details/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main/Main";
import { PushToTalkButton, PushToTalkButtonContainer, Notifications } from "@speechly/react-ui";

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" className={classes.last} />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <Notifications />
      </PushToTalkButtonContainer>
    </div>
  );
};

export default App;
