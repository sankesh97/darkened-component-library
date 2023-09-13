import React from 'react';
import './LinkButton.css';

type LinkButtonType = {
  href: string;
  children: React.ReactNode;
};
const LinkButton = ({ href, children }: LinkButtonType) => {
  return (
    <a href={href} className='link-button'>
      {children}
    </a>
  );
};

export default LinkButton;
