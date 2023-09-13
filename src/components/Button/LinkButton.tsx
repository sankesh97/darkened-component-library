import React from 'react';
import './LinkButton.css';

interface LinkButtonProps extends React.ComponentProps<'a'> {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FunctionComponent<LinkButtonProps> = ({
  href,
  children,
  ...rest
}) => (
  <a href={href} className='link-button' {...rest}>
    {children}
  </a>
);
export default LinkButton;
