import Highlight from 'react-highlight';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';

const TextDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Texts
      </Heading>
      <br />
      <p>
        Text component is a paragraph element that provides support with text
        transformation and text alignment
      </p>
      <br />
      <br />
      <div className='components-display'>
        <Text textAlign='start'>Text Component</Text>
        <Text textAlign='center'>Text Component</Text>
        <Text textAlign='end'>Text Component</Text>
        <Text textTransform='uppercase'>Text Component</Text>
        <Text textTransform='lowercase'>Text Component</Text>
        <Text textTransform='capitalize'>Text Component</Text>
      </div>
      <br />
      <br />
      <Heading component='h6' variant='h1'>
        How to use Text Component?
      </Heading>
      <br />
      <p>
        {' '}
        Enter the respective attribute values to texttransform and textalign to
        get the required results.
      </p>
      <br />
      <Highlight className='html'>
        {`<Text textAlign='start'>Text Component</Text>\n<Text textAlign='center'>Text Component</Text>\n<Text textAlign='end'>Text Component</Text>\n<Text textTransform='uppercase'>Text Component</Text>\n<Text textTransform='lowercase'>Text Component</Text>\n<Text textTransform='capitalize'>Text Component</Text>`}
      </Highlight>
    </>
  );
};
export default TextDoc;
