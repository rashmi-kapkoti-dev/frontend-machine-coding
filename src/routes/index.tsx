import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ServerPagination from '../pages/ServerPagination';
import FormPage from '../pages/FormPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server-pagination" element={<ServerPagination />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
