import './Alert.css';

type AlertType = {
  children: string;
  alerttype: string;
};
const Alert = ({ children, alerttype }: AlertType) => {
  return <div className={`alert alert-${alerttype}`}>{children}</div>;
};
export default Alert;
