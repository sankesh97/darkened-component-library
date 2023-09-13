import './FloatingActionButton.css';

interface IconButtonProps extends React.ComponentProps<'button'> {
  icon: string;
}

const FloatingActionButton: React.FunctionComponent<IconButtonProps> = ({
  icon,
  ...rest
}) => {
  return (
    <button {...rest} className={`float-button ${rest.className}`}>
      <i className={icon}></i>
    </button>
  );
};
export default FloatingActionButton;
