import Highlight from 'react-highlight';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import FloatingActionButton from '../../components/Button/FloatingActionButton';
import IconButton from '../../components/Button/IconButton';
import LinkButton from '../../components/Button/LinkButton';

const ButtonDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Buttons
      </Heading>
      <br />
      <p>
        A button component is a user interface element that users can interact
        with to trigger actions or events when clicked or tapped.
      </p>
      <br />
      <Heading component='h5' variant='h1'>
        How to use Button Component?
      </Heading>
      <br />

      {/* Simple Buttons */}

      <Heading component='h6' variant='h1'>
        Simple Button
      </Heading>
      <Button>Hello world</Button>
      <p>
        Button can have different attributes as they normally do with the HTML
        button
      </p>
      <br />
      <Highlight className='html'>{`<Button>Hello world</Button>`}</Highlight>
      <br />

      {/* Icon Button */}

      <Heading component='h6' variant='h1'>
        Icon Button
      </Heading>
      <IconButton icon='bi bi-trash3-fill'></IconButton>
      <p>
        Icon Button can have different attributes as they normally do with the
        HTML button. We need to add a bootstrap icon classes to icon attribute
        to display the icon
      </p>
      <br />
      <Highlight className='html'>{`<IconButton icon='bi bi-trash3-fill'></IconButton>`}</Highlight>
      <br />

      {/* Link Button */}

      <Heading component='h6' variant='h1'>
        Link Button
      </Heading>
      <LinkButton href='#' target='_blank'>
        Link Button
      </LinkButton>
      <p>Link Button has a single minimum requirement of href</p>
      <br />
      <Highlight className='html'>{`<LinkButton href='#' target='_blank'>Link Button</LinkButton>`}</Highlight>
      <br />
      <Heading component='h6' variant='h1'>
        Floating Action Button
      </Heading>
      <br />
      <p>
        It can have different attributes as they normally do with the HTML
        button.
      </p>
      <br />
      <Highlight className='html'>{`<FloatingActionButton icon='bi bi-chat-right-dots-fill' onClick={() => { alert('There is no one here, But, Thanks for checking.'); }}></FloatingActionButton>`}</Highlight>
      {/* Floating Button */}

      <FloatingActionButton
        icon='bi bi-chat-right-dots-fill'
        onClick={() => {
          alert('There is no one here, But, Thanks for checking.');
        }}
      ></FloatingActionButton>
    </>
  );
};
export default ButtonDoc;
