import { createElement } from 'react';
import './Heading.css';

type HeadingType = {
  variant: string;
  component: string;
  children: React.ReactNode;
};

const Heading = ({ variant, component, children }: HeadingType) => {
  return createElement(variant, { className: component }, children);
};

export default Heading;
