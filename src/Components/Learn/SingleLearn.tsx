import React from "react";
import classes from "./Learn.module.css";
import Learn1 from "../../assets/Learn/Learn.png";

type Props = {
  time: string;
  description: string;
  title: string;
};

const SingleLearn: React.FC<Props> = ({ title, time, description }) => {
  return (
    <div className={classes.LearnCard}>
      <img src={Learn1} alt="image" />
      <div className={classes.LearnTitle}>{title}</div>
      <div className={classes.time}>{time}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.readnow}>Read now &gt;&gt;</div>
    </div>
  );
};

export default SingleLearn;
