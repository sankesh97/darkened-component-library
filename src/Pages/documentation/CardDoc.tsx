import Highlight from 'react-highlight';
import OverlayCard from '../../components/Card/OverlayCard';
import Heading from '../../components/Heading/Heading';
import Card from '../../components/Card/Card';

const CardDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Cards
      </Heading>
      <br />
      <p>
        A card component is a self-contained and visually distinct element in a
        user interface, often used to display concise information or content in
        a structured and visually appealing manner.
      </p>
      <br />
      <Heading component='h5' variant='h1'>
        How to use Card Component?
      </Heading>
      <br />
      <p>
        There are two different components here. 1. Normal Card components
        consists of all the features mentioned below. 2. Overlay Card is
        specifically made for card
      </p>
      <br />
      <br />
      {/* Cards with Badges */}
      <Heading component='h6' variant='h1'>
        Cards with Badge
      </Heading>
      <Card cardBadge='Info' orientation='horizontal'>
        Hello New Text
      </Card>
      <br />
      <p>
        Overlay Card provides with imgURL to set the background image. Any Text
        inside the Overlay card would be center aligned in the overlay chhard.
      </p>
      <br />
      <Highlight className='html'>
        {`<Card cardBadge='Info' orientation='horizontal'> Hello New Text</Card>`}
      </Highlight>
      <br />
      <br />
      {/* Cards with Dismiss */}
      <Heading component='h6' variant='h1'>
        Cards with Dismiss
      </Heading>
      <Card cardWithDismiss>Hello New Text</Card>
      <br />
      <p>
        Overlay Card provides with imgURL to set the background image. Any Text
        inside the Overlay card would be center aligned in the overlay chhard.
      </p>
      <br />
      <Highlight className='html'>
        {`<Card cardWithDismiss>Hello New Text</Card>`}
      </Highlight>
      <br />
      <br />
      {/* Overlay card */}
      <Heading component='h6' variant='h1'>
        Overlay Card
      </Heading>
      <OverlayCard imgUrl='https://picsum.photos/300/200'>
        <Heading component='h4' variant='h4'>
          This is a card
        </Heading>
        <p>This is short description</p>
      </OverlayCard>
      <br />
      <p>
        Overlay Card provides with imgURL to set the background image. Any Text
        inside the Overlay card would be center aligned in the overlay chhard.
      </p>
      <br />
      <Highlight className='html'>
        {`<OverlayCard imgUrl='https://picsum.photos/300/200'>\n<Heading component='h4' variant='h4'>\nThis is a card\n</Heading>\n<p>This is short description</p>\n</OverlayCard>`}
      </Highlight>
      <br />
      <br />
      {/* Text Only Cards */}
      <Heading component='h6' variant='h1'>
        Text only cards
      </Heading>
      <Card>
        Overlay Card provides with imgURL to set the background image. Any Text
        inside the Overlay card would be center aligned in the overlay chhard.
      </Card>
      <br />
      <br />
      <Highlight className='html'>{`<Card> Overlay Card provides with imgURL to set the background image. Any Text inside the Overlay card would be center aligned in the overlay chhard.</Card>`}</Highlight>
      <br />
      <br />
      {/* Orientation  Cards */}
      <Heading component='h6' variant='h1'>
        Orientation Cards
      </Heading>
      <Card orientation='horizontal'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tempore illo porro et itaque eligendi, cupiditate animi necessitatibus
        perspiciatis nesciunt suscipit aliquam accusantium atque obcaecati iste
        mollitia maxime vero similique?
      </Card>
      <Card orientation='vertical'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        tempore illo porro et itaque eligendi, cupiditate animi necessitatibus
        perspiciatis nesciunt suscipit aliquam accusantium atque obcaecati iste
        mollitia maxime vero similique?
      </Card>
      <br />

      <br />
      <Highlight className='html'>{`<Card> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore illo porro et itaque eligendi, cupiditate animi necessitatibus perspiciatis nesciunt suscipit aliquam accusantium atque obcaecati iste mollitia maxime vero similique?</Card>`}</Highlight>
      <br />
      <br />
      {/* Orientation  Cards */}
      <Heading component='h6' variant='h1'>
        Orientation Cards
      </Heading>
      <Card cardShadow>Just a sample Text for the cards</Card>
      <br />
      <Highlight className='html'>{`<Card cardShadow>Just a sample Text for the cards</Card>`}</Highlight>
      <br />
    </>
  );
};
export default CardDoc;
