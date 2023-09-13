import './Avatar.css';

type AvatarType = { imgurl: string; shape: string; alt: string };

const Avatar = ({ imgurl, shape, alt }: AvatarType) => {
  return (
    <>
      <img
        src={imgurl}
        className={`avatar ${shape === `round` && `avatar-rounded`} ${
          shape === `circle` && `avatar-circle`
        }`}
        alt={alt}
      />
    </>
  );
};
export default Avatar;
