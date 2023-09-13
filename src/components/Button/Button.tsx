import './Button.css';

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => (
  <button {...rest} className={`icon-button ${rest.className}`}>
    {children}
  </button>
);

export default Button;
