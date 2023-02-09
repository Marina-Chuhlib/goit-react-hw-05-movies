import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
