import classes from './Mission.module.css'
type Props={
    description: string;
    digit: string
    icon: any;
}
const SingleMission:React.FC<Props> = ({ description, digit, icon }) => {
  return (
    <div className={classes.missionCard}>
        <div className={classes.missionIcon}>{icon}</div>
        <div className={classes.missionDigit}>{digit}</div>
        <div className={classes.missionDescription}>{description}</div>
    </div>
  );
}

export default SingleMission;