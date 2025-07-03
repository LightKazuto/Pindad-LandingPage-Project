import './index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPages';
import Page404 from './Badrequest/404';
import Page500 from './Badrequest/500';
import Page403 from './Badrequest/403';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />

      <Route path='/500' element={<Page500 />} />
      <Route path='/403' element={<Page403 />} />

      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default App;
