import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import Home from '../pages/Home';
import ServerPagination from '../pages/ServerPagination';
import FormPage from '../pages/FormPage';
import AcronymFinder from '../pages/AcronymFinder';
import AccordionPage from '../pages/AccordionPage';
import NestedComments from '../pages/NestedComments';
import InfiniteScroll from '../pages/InfiniteScroll';
import ImageSlider from '../pages/ImageSlider';
import SearchAutocomplete from '../pages/SearchAutocomplete';
import Accessibility from '../pages/Accessibility';
import Localization from '../pages/Localization';
import ThemeDemo from '../pages/ThemeDemo';

const Router = () => {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server-pagination" element={<ServerPagination />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/acronym-finder" element={<AcronymFinder />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/comments" element={<NestedComments />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/search-autocomplete" element={<SearchAutocomplete />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/localization" element={<Localization />} />
        <Route path="/theme-demo" element={<ThemeDemo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
