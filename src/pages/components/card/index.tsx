import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


interface PropTypes {
  name: string;
  image: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      marginBottom: "2rem",
      padding: "2rem 2rem 5rem 2rem",
      borderRadius: "8px",
      height: "260px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 28px -13px rgba(0, 0, 0, 0.6)",
    },
    title: {
      opacity: 0.7,
      fontSize: "1.4em",
    },
    supervisor: {
      borderTop: "lighten(rgba(82, 177, 207, 0.8), 1%) solid 0.3rem",
    },
  });
});

const Card = ({ name, image, description }: PropTypes) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${name}`}>
      <h2 className={classes.title}>Supervisor</h2>
      <p className='card-text'>
        Monitors activity to identify project roadblocks
      </p>
      <img className='supervisor-img' src={} alt='' />
    </div>
  );
};

export default Card;
