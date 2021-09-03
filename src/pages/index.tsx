import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import KarmaIcon from "./../images/icon-karma.inline.svg";
import SupervisorIcon from "./../images/icon-supervisor.inline.svg";
import CalculatorIcon from "./../images/icon-calculator.inline.svg";
import TeamBuilderIcon from "./../images/icon-team-builder.inline.svg";
import Card from "./Card";
import utils from "../utils";

export type positionType = "top" | "right" | "bottom" | "left";

const cards = [
  {
    name: "Karma",
    Image: KarmaIcon,
    description: "Regularly evaluates our talent to ensure quality",
  },
  {
    name: "Team Builder",
    Image: TeamBuilderIcon,
    description:
      "Scans our talent network to create the optimal team for your project",
  },
  {
    name: "Calculator",
    Image: CalculatorIcon,
    description:
      "Uses data from past projects to provide better delivery estimates",
  },
  {
    name: "Supervisor",
    Image: SupervisorIcon,
    description: "Monitors activity to identify project roadblocks",
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  "@global": {
    body: {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
  },
  root: {
    backgroundColor: "#eee",
    height: "100vh",
    position: "relative",
    width: "100vw",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 15,
  },
  btn: {
    backgroundColor: "#02ee9a",
    fontSize: 16,
    margin: "0 15px",
    transition: "0.5s",

    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
      margin: "0 2px",
      width: "18%",
    },
    "&:hover": {
      backgroundColor: "#02cbee",
    },
    "&:nth-child(odd)": {
      "&:hover": {
        backgroundColor: "#4970f2",
        color: "#e8e8e8",
      },
    },
  },
  cardsContainer: {
    height: "80%",
    position: "relative",
  },
}));

const IndexPage = () => {
  const classes = useStyles();
  const [positions, setPositions] = useState<positionType[]>([
    "top",
    "right",
    "bottom",
    "left",
  ]);

  return (
    <div className={classes.root}>
      <div className={classes.buttonContainer}>
        {utils.map(util => {
          return (
            <Button
              className={classes.btn}
              key={util.title}
              onClick={() => setPositions(prevState => util.fn(prevState))}
            >
              {util.title}
            </Button>
          );
        })}
      </div>
      <div className={classes.cardsContainer}>
        {cards.map((card, idx) => {
          return <Card key={card.name} {...card} position={positions[idx]} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
