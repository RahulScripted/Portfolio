import {Routes,Route, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import CodingArena from './Pages/CodingArena';
import Footer from './components/Footer';
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
          <Route path='/arena' element={<CodingArena />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
