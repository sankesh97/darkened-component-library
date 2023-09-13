import Highlight from 'react-highlight';
import Heading from '../../components/Heading/Heading';
import Badges from '../../components/Badge/Badges';
import Avatar from '../../components/Avatar/Avatar';

const BadgeDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Badges
      </Heading>
      <br />
      <p>
        A badge component is a small visual element used in user interfaces to
        highlight or display specific information, often in the form of a label
        or indicator.
      </p>
      <br />
      <Badges badgeContent={8}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-envelope'
          viewBox='0 0 16 16'
        >
          <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
        </svg>
      </Badges>
      <br />
      <Badges badgeContent={5}>
        <Avatar
          alt='Random 200x200 Image'
          shape='circle'
          imgurl='https://picsum.photos/200'
        ></Avatar>
      </Badges>
      <br />
      <Heading component='h6' variant='h1'>
        How to use Badge Component?
      </Heading>
      <br />
      <p>
        Badge takes up only one value, the component i.e to be rendered in the
        badgeContent
      </p>
      <br />
      <Highlight className='html'>
        {`<Badges badgeContent={8}><svg></svg></Badges>\n<Badges badgeContent={5}><Avatar alt='Random 200x200 Image' shape='circle' imgurl='https://picsum.photos/200'></Avatar></Badges>`}
      </Highlight>
    </>
  );
};
export default BadgeDoc;
