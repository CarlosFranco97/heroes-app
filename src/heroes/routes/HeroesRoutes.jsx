import {Routes, Route, Navigate} from 'react-router-dom';
import { DcPages, HeroPage, MarvelPage, SearchPage } from '../pages';
import { Navbar } from '../../ui';

export const HeroesRoutes = () => {
  return (
  <>
    <Navbar />
    <div className='container'>
        <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPages />} />
        <Route path='hero/:id' element={<HeroPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='/' element={<Navigate to="/dc"/>} />
        </Routes>
    </div>
  </>
    )
}
