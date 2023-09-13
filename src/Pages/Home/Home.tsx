import homepageImage from '../../Assets/homepage-img.svg';
import Card from '../../components/Card/Card';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <img src={homepageImage} style={{ maxWidth: '400px' }} />
      <br />
      <h1>The Component Library</h1>
      <br />
      <p>Elevate your React projects with our component magic.</p>
      <Card cardWithDismiss cardBadge='Info' orientation='horizontal'>
        <p>Hello World</p>
      </Card>
    </div>
  );
};
export default Home;
