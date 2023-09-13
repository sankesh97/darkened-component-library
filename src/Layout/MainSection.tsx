import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ComponentsPage from '../Pages/ComponentsPage/ComponentsPage';
import AlertDoc from '../Pages/documentation/AlertDoc';
import AvatarDoc from '../Pages/documentation/AvatarDoc';
import CardDoc from '../Pages/documentation/CardDoc';
import BadgeDoc from '../Pages/documentation/BadgeDoc';
import HeadingsDoc from '../Pages/documentation/HeadingsDoc';
import TextDoc from '../Pages/documentation/TextDoc';
import ImageDoc from '../Pages/documentation/ImageDoc';

const MainSection = () => {
  return (
    <main className='mainsection'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/components' element={<ComponentsPage />}></Route>
        <Route path='/components/alerts' element={<AlertDoc />}></Route>
        <Route path='/components/avatar' element={<AvatarDoc />}></Route>
        <Route path='/components/badge' element={<BadgeDoc />}></Route>
        <Route path='/components/card' element={<CardDoc />}></Route>
        <Route path='/components/headings' element={<HeadingsDoc />}></Route>
        <Route path='/components/image' element={<ImageDoc />}></Route>
        <Route path='/components/text' element={<TextDoc />}></Route>
      </Routes>
    </main>
  );
};
export default MainSection;
