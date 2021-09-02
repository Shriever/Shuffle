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
      marginBottom: "2rem",
      padding: "2rem 2rem 5rem 2rem",
      borderRadius: "8px",
      height: "176px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 28px -13px rgba(0, 0, 0, 0.6)",
      borderTop: "4px solid",
      borderTopColor: (props: PropTypes) => matchColor(props),
      minWidth: 493,
      position: "absolute",
      transform: "translate(-50%, -50%)",
      transition: "1s",
    },
    title: {
      opacity: 0.7,
      fontSize: "1.4em",
    },
    supervisor: {
      borderTop: "rgba(82, 177, 207, 0.8) solid 0.3rem",
    },
    icon: {
      float: "right",
      marginTop: 60,
    },
    top: {
      left: "50%",
      top: "25%",
    },
    right: {
      top: "50%",
      left: "82.5%",
    },
    bottom: {
      left: "50%",
      top: "75%",
    },
    left: {
      top: "50%",
      left: "17.5%",
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
      <p className='card-text'>{description}</p>
      <Image className={classes.icon} />
    </div>
  );
};

export default Card;
