import classes from './Department.module.css'
type Props={
    title: string;
    description: string;
    icon: any;
    number: string;
}
const SingleDepartment:React.FC<Props> = ({title, description, icon, number}) => {
  return (
    <div className={classes.DepartmentContainer}>
        <div className={classes.DepartmentIcon}>{icon}</div>
        <div className={classes.DepartmentTitle}>{title}</div>
        <div className={classes.DepartmentDescription}>{description}</div>
        <div className={classes.DepartmentNumber}>{number}</div>
    </div>
  );
}

export default SingleDepartment;
