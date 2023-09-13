import './Avatar.css';

type AvatarType = { imgurl: string; shape: string; alt: string };

const Avatar = ({ imgurl, shape, alt }: AvatarType) => {
  return (
    <>
      <img src={imgurl} className={`avatar ${shape}`} alt={alt} />
    </>
  );
};
export default Avatar;
