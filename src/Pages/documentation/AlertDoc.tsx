import Alert from '../../components/Alert/Alert';
import Heading from '../../components/Heading/Heading';
import Highlight from 'react-highlight';

const AlertDoc = () => {
  return (
    <>
      <Heading component='h4' variant='h1'>
        Alerts
      </Heading>
      <br />
      <p>
        An alerts component is a user interface element designed to display
        important notifications or messages to users in a concise and
        attention-grabbing manner.
      </p>
      <br />
      <Alert alerttype='primary'>This is an Alert </Alert>
      <br />
      <Alert alerttype='info'>This is an Alert </Alert>
      <br />
      <Alert alerttype='dark'>This is an Alert </Alert>
      <br />
      <Alert alerttype='light'>This is an Alert </Alert>
      <br />
      <Heading component='h6' variant='h1'>
        How to use Alert Component?
      </Heading>
      <br />
      <Highlight className='html'>
        {`<Alert alerttype='primary'>This is an Alert </Alert>\n<Alert alerttype='info'>This is an Alert </Alert>\n<Alert alerttype='dark'>This is an Alert </Alert>\n<Alert alerttype='light'>This is an Alert </Alert>`}
      </Highlight>
    </>
  );
};
export default AlertDoc;
