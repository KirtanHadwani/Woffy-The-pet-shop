import classes from './SingleOffer.module.css'
type Props={
    title: string;
    description: string;
    icon: any;
}
const SingleOffer:React.FC<Props> = ({title, description, icon}) => {
  return (
    <div className={classes.offerContainer}>
        <div className={classes.offerIcon}>{icon}</div>
        <div className={classes.offerTitle}>{title}</div>
        <div className={classes.offerDescription}>{description}</div>
    </div>
  );
}

export default SingleOffer;
