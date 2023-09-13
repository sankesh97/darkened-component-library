import Highlight from 'react-highlight';
import Avatar from '../../components/Avatar/Avatar';
import Heading from '../../components/Heading/Heading';

const AvatarDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Avatars
      </Heading>
      <br />
      <p>
        An avatars component is a UI element that represents users or entities
        with visual icons or images, typically used in applications to provide a
        visual identity for profiles or interactions.
      </p>
      <br />
      <Avatar
        alt='Random 200x200 Image'
        shape='round'
        imgurl='https://picsum.photos/200'
      ></Avatar>
      <br />
      <br />
      <Avatar
        alt='Random 200x200 Image'
        shape='circle'
        imgurl='https://picsum.photos/200'
      ></Avatar>
      <br />
      <br />
      <Heading component='h6' variant='h1'>
        How to use Avatar Component?
      </Heading>
      <br />
      <p>
        You can go ahead with the below syntax, with a url of the image in
        'imgurl' & shape.
        <br />
        There are two shapes, <strong>round</strong> and <strong>circle</strong>
      </p>
      <br />
      <Highlight className='html'>
        {`<Avatar alt='Random 200x200 Image' shape='round' imgurl='https://picsum.photos/200'></Avatar>\n<Avatar alt='Random 200x200 Image' shape='circle' imgurl='https://picsum.photos/200'></Avatar>`}
      </Highlight>
    </>
  );
};

export default AvatarDoc;
