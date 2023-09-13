import Highlight from 'react-highlight';
import Heading from '../../components/Heading/Heading';

const HeadingsDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Headings
      </Heading>
      <br />
      <p>
        A heading component is a UI element used to display text as a prominent
        and often larger-than-normal title or header, typically used to convey
        the main topic or section title in a document or webpage.
      </p>
      <br />
      <Heading component='h1' variant='h1'>
        Heading 1
      </Heading>
      <Heading component='h2' variant='h2'>
        Heading 2
      </Heading>
      <Heading component='h3' variant='h3'>
        Heading 3
      </Heading>
      <Heading component='h4' variant='h4'>
        Heading 4
      </Heading>
      <Heading component='h5' variant='h5'>
        Heading 5
      </Heading>
      <Heading component='h6' variant='h6'>
        Heading 6
      </Heading>
      <br />
      <Heading component='h5' variant='h5'>
        How to use Heading Component?
      </Heading>
      <br />
      <p>
        Heading Component has two attributes one is component and other is
        variant. Variant is used to define the header tag that the tag name
        h1,h2,h3,h4,h5,h6. Whereas the components defines the size of the
        heading.
      </p>
      <br />
      <Highlight className='html'>{`<Heading component='h1' variant='h1'>Heading 1</Heading>\n<Heading component='h2' variant='h2'>Heading 2</Heading>\n<Heading component='h3' variant='h3'>Heading 3</Heading>\n<Heading component='h4' variant='h4'>Heading 4</Heading>\n<Heading component='h5' variant='h5'>Heading 5</Heading>\n<Heading component='h6' variant='h6'>Heading 6</Heading>`}</Highlight>
    </>
  );
};
export default HeadingsDoc;
