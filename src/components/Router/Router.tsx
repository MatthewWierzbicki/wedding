import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@pages/Home/Home';
import { routes } from '@utils/constants/routes';
import { Navigation } from '@components/Navigation/Navigation';

export const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
