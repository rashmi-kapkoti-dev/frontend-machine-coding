import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ServerPagination from '../pages/ServerPagination';
import FormPage from '../pages/FormPage';
import AcronymFinder from '../pages/AcronymFinder';
import AccordionPage from '../pages/AccordionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server-pagination" element={<ServerPagination />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/acronym-finder" element={<AcronymFinder />} />
        <Route path="/accordion" element={<AccordionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
