import './OverlayCard.css';

type OverlayCardType = {
  children: React.ReactNode;
  imgUrl: string;
};

const OverlayCard = ({ children, imgUrl }: OverlayCardType) => {
  console.log(imgUrl);
  return (
    <div
      style={{
        backgroundImage: `url('${imgUrl}'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)) `,
      }}
      className={`overlay-card`}
    >
      <div>{children}</div>
    </div>
  );
};
export default OverlayCard;
