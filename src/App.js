import './index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPages';
import Page404 from './Pages/404';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default App;
