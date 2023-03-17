import classes from './Values.module.css'
type Props={
    title: string;
    description: string;
    icon: any;
}
const SingleValue:React.FC<Props> = ({title, description, icon}) => {
  return (
    <div className={classes.valueContainer}>
        <div className={classes.valueIcon}>{icon}</div>
        <div className={classes.valueTitle}>{title}</div>
        <div className={classes.valueDescription}>{description}</div>
    </div>
  );
}

export default SingleValue;
