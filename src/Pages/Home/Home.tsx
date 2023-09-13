import homepageImage from '../../Assets/homepage-img.svg';
import Badges from '../../components/Badge/Badges';
import FloatingActionButton from '../../components/Button/FloatingActionButton';
import IconButton from '../../components/Button/IconButton';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <img src={homepageImage} style={{ maxWidth: '400px' }} />
      <br />
      <h1>The Component Library</h1>
      <br />
      <p>Elevate your React projects with our component magic.</p>
      <IconButton icon={'bi bi-0-square'}></IconButton>
      <FloatingActionButton icon={'bi bi-0-square'}></FloatingActionButton>
      <Badges badgeContent={1}>
        <i className='bi bi-0-square'></i>
      </Badges>
    </div>
  );
};
export default Home;
