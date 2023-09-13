import './Text.css';

type TextType = {
  textAlign?: string;
  textTransform?: string;
  children: React.ReactNode;
};

const Text = ({ textAlign, textTransform, children }: TextType) => {
  return (
    <p
      className={
        (textAlign ? textAlign : '') +
        ' ' +
        (textTransform ? textTransform : '')
      }
    >
      {children}
    </p>
  );
};
export default Text;
