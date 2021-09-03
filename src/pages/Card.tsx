import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { positionType } from "./";
import { matchColor } from "./../utils";
import KarmaIcon from "./../images/icon-karma.inline.svg";
import SupervisorIcon from "./../images/icon-supervisor.inline.svg";
import CalculatorIcon from "./../images/icon-calculator.inline.svg";
import TeamBuilderIcon from "./../images/icon-team-builder.inline.svg";

interface PropTypes {
  name: string;
  description: string;
  position: positionType;
}

const useStyles = makeStyles<Theme, PropTypes>(theme => {
  return createStyles({
    root: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      borderTop: "4px solid",
      borderTopColor: props => matchColor(props.name),
      boxShadow: "0px 0px 28px -13px rgba(0, 0, 0, 0.6)",
      height: "20%",
      marginBottom: "2rem",
      width: "23%",
      padding: "2rem 2rem 5rem 2rem",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      transition: "1s",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: props => matchColor(props.name),
        height: 50,
        width: 50,
      },
    },
    title: {
      opacity: 0.7,
      fontSize: "1.4em",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    description: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    icon: {
      float: "right",
      marginTop: 60,
      [theme.breakpoints.down("lg")]: {
        marginTop: 0,
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    top: {
      left: "50%",
      top: "25%",
    },
    right: {
      left: "80%",
      top: "50%",
    },
    bottom: {
      left: "50%",
      top: "75%",
    },
    left: {
      left: "20%",
      top: "50%",
    },
  });
});

const Card: (props: PropTypes) => JSX.Element = props => {
  const classes = useStyles(props);
  const { name, description, position } = props;

  const determinePosition = (position: positionType) => {
    if (position === "top") {
      return classes.top;
    } else if (position === "right") {
      return classes.right;
    } else if (position === "bottom") {
      return classes.bottom;
    } else {
      return classes.left;
    }
  };

  return (
    <div className={`${classes.root} ${determinePosition(position)}`}>
      <h2 className={classes.title}>{name}</h2>
      <p className={classes.description}>{description}</p>
      {name === "Supervisor" && <SupervisorIcon className={classes.icon} />}
      {name === "Karma" && <KarmaIcon className={classes.icon} />}
      {name === "Calculator" && <CalculatorIcon className={classes.icon} />}
      {name === "Team Builder" && <TeamBuilderIcon className={classes.icon} />}
    </div>
  );
};

export default Card;
