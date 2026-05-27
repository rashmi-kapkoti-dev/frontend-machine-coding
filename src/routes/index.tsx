import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ServerPagination from '../pages/ServerPagination';
import FormPage from '../pages/FormPage';
import AcronymFinder from '../pages/AcronymFinder';
import AccordionPage from '../pages/AccordionPage';
import NestedComments from '../pages/NestedComments';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server-pagination" element={<ServerPagination />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/acronym-finder" element={<AcronymFinder />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/comments" element={<NestedComments />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
