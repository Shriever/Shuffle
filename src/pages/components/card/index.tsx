import React, { SVGProps, ReactElement } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { positionType } from "./../../";

interface PropTypes {
  name: string;
  Image: (props: SVGProps<SVGElement>) => ReactElement;
  description: string;
  position: positionType;
}

const matchColor = (props: PropTypes) => {
  const name: string = props.name.toLowerCase();
  if (name === "supervisor") {
    return "#45d3d3";
  } else if (name === "calculator") {
    return "#549ef2";
  } else if (name === "karma") {
    return "#fcaf4a";
  } else {
    return "#ea5353";
  }
};

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: "#fff",
      borderRadius: "8px",
      borderTop: "4px solid",
      borderTopColor: (props: PropTypes) => matchColor(props),
      boxShadow: "0px 0px 28px -13px rgba(0, 0, 0, 0.6)",
      height: "20%",
      marginBottom: "2rem",
      width: "23%",
      padding: "2rem 2rem 5rem 2rem",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      transition: "1s",
      [theme.breakpoints.down("sm")]: {
        backgroundColor: (props: PropTypes) => matchColor(props),
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
        marginTop: 0
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

const Card = (props: PropTypes) => {
  const classes = useStyles(props);
  const { name, Image, description, position } = props;

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
      <Image className={classes.icon} />
    </div>
  );
};

export default Card;
