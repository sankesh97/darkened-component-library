import { useState } from 'react';
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
  const [openState, setOpenState] = useState(true);
  return (
    <>
      {openState && (
        <div
          className={`card ${
            cardShadow && 'card-shadow'
          } ${orientation} ${typeOfCard}`}
        >
          {cardBadge && <span className='card-badge'>{cardBadge}</span>}
          {cardWithDismiss && (
            <span onClick={() => setOpenState(!openState)} className='dismiss'>
              <i className='bi bi-x-circle'></i>
            </span>
          )}
          <div className='card-content'>{children}</div>
        </div>
      )}
    </>
  );
};
export default Card;
