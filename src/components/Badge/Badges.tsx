import './Badges.css';

type BadgeType = {
  children: React.ReactNode;
  badgeContent: React.ReactNode;
};

const Badges = ({ children, badgeContent }: BadgeType) => {
  return (
    <span className='badge-container'>
      {children}
      <span className='badge'>{badgeContent}</span>
    </span>
  );
};
export default Badges;
