import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'
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

  return (
    <div className="bg-black min-h-screen text-white">
      {loading && <Loader onComplete={() => setLoading(false)} />}
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
