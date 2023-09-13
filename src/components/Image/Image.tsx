import './Image.css';

type ImageType = {
  imgFluid?: boolean;
  borderImg?: string;
  Imgsrc: string;
};

const Image = ({ imgFluid, borderImg, Imgsrc }: ImageType) => {
  return (
    <>
      <img
        src={Imgsrc}
        className={`${imgFluid ? 'img-fluid' : ''} ${borderImg}`}
      ></img>
    </>
  );
};
export default Image;
