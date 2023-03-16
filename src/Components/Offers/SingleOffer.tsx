import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
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
    // <div>
    //   <span>
    //     <div>Free Shipping</div>
    //     <div>On all prepaid order above Rs. 599</div>
    //   </span>
    //   <span>
    //     <div>Speedy Deliveries</div>
    //     <div>Parcel dispatched within 24 hours</div>
    //   </span>
    //   <span>
    //     <div>Chat With Us</div>
    //     <div>Talk with us everyday, 10am to 8pm</div>
    //   </span>
    //   <span>
    //     <div>Amazing Value</div>
    //     <div>Competitive pricing on the best products</div>
    //   </span>
    // </div>
  );
}

export default SingleOffer;
