import React, { SVGProps, ReactElement } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface PropTypes {
  name: string;
  Image: (props: SVGProps<SVGElement>) => ReactElement;
  description: string;
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
      height: "260px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 28px -13px rgba(0, 0, 0, 0.6)",
      borderTop: "4px solid",
      borderTopColor: (props: PropTypes) => matchColor(props),
    },
    title: {
      opacity: 0.7,
      fontSize: "1.4em",
    },
    supervisor: {
      borderTop: "rgba(82, 177, 207, 0.8) solid 0.3rem",
    },
  });
});

const Card = (props: PropTypes) => {
  const classes = useStyles(props);
  const { name, Image, description } = props;
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{name}</h2>
      <p className='card-text'>{description}</p>
      {/* <img className='supervisor-img' src={Image} alt='' /> */}
      <Image className={classes.title} />
    </div>
  );
};

export default Card;
