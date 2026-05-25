import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ServerPagination from '../pages/ServerPagination';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server-pagination" element={<ServerPagination />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
