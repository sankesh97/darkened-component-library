import './Card.css';

type CardType = {
  cardShadow?: boolean;
  cardWithDismiss?: boolean;
  orientation?: string;
  typeOfCard?: string;
  cardBadge?: string;
  children: React.ReactNode;
};

const Card = ({
  cardShadow,
  cardWithDismiss,
  orientation,
  typeOfCard,
  cardBadge,
  children,
}: CardType) => {
  return (
    <div
      className={`card ${
        cardShadow ? 'card-shadow' : null
      } ${orientation} ${typeOfCard}`}
    >
      {cardBadge && <span className=''></span>}
      {cardWithDismiss && (
        <span className='dismiss'>
          <i className='bi bi-x-circle-fill'></i>
        </span>
      )}
      {children}
    </div>
  );
};
export default Card;
