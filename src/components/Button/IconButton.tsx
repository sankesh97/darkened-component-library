import './IconButton.css';

interface IconButtonProps extends React.ComponentProps<'button'> {
  icon: string;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  ...rest
}) => (
  <button {...rest} className={`icon-button ${rest.className}`}>
    <i className={icon}></i>
  </button>
);
export default IconButton;
