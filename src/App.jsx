import {Routes,Route, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Footer from './components/Footer';
import Experience from './Pages/Experience';
import Achievement from './Pages/Achievement';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-black min-h-screen text-white">
      {loading && <Loader />}
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/achievement' element={<Achievement />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
