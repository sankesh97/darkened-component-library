import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='sidebar text-center'>
      <header className='header'>
        <h1>DCL</h1>
        <p>Darkened Component Library</p>
      </header>
      <nav>
        <ul className='navmenu'>
          <li>
            <NavLink to='/components'>All Components</NavLink>
          </li>
          <li>
            <NavLink to='/components/alerts'>Alerts</NavLink>
          </li>
          <li>
            <NavLink to='/components/avatar'>Avatar</NavLink>
          </li>
          <li>
            <NavLink to='/components/badge'>Badges</NavLink>
          </li>
          <li>
            <NavLink to='/components/card'>Cards</NavLink>
          </li>
          <li>
            <NavLink to='/components/headings'>Headings</NavLink>
          </li>
          <li>
            <NavLink to='/components/image'>Images</NavLink>
          </li>
          <li>
            <NavLink to='/components/text'>Text</NavLink>
          </li>
        </ul>
      </nav>
      <footer>
        Darkened React Component Library.
        <br /> Created with <strong>React</strong>, <strong>TS</strong>, and{' '}
        <strong>❤️</strong>
      </footer>
    </aside>
  );
};
export default Sidebar;