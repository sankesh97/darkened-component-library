import Highlight from 'react-highlight';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';

const ImageDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Images
      </Heading>
      <br />
      <p>
        The Image component support features like responsiveness and curved
        edges
      </p>
      <br />
      <br />
      <Image
        imgFluid
        borderImg='rounded-2'
        Imgsrc='https://picsum.photos/300/200'
      ></Image>
      <Image
        imgFluid
        borderImg='rounded-3'
        Imgsrc='https://picsum.photos/200/200'
      ></Image>
      <Image
        imgFluid
        borderImg='rounded-2'
        Imgsrc='https://picsum.photos/200/200'
      ></Image>
      <br />
      <br />
      <Heading component='h6' variant='h1'>
        How to use Image Component?
      </Heading>
      <br />
      <p>
        <ol>
          <li>
            imgFluid is a boolean value to give responsiveness to the images
          </li>
          <li>Imgsrc is a to give the image source</li>
          <li>borderImg is used to define the curved edges</li>
        </ol>
      </p>
      <br />
      <Highlight className='html'>
        {`<Image imgFluid borderImg='rounded-2' Imgsrc='https://picsum.photos/300/200'></Image>\n<Image imgFluid borderImg='rounded-3' Imgsrc='https://picsum.photos/200/200'></Image>\n<Image imgFluid borderImg='rounded-2' Imgsrc='https://picsum.photos/200/200'></Image>`}
      </Highlight>
    </>
  );
};
export default ImageDoc;
