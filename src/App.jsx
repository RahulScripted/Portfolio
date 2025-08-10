import {Routes,Route} from 'react-router-dom'
import './index.css'
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Footer from './components/Footer';
import Experience from './Pages/Experience';
import Achievement from './Pages/Achievement';

const App = () => {

  return (
    <div className="min-h-screen text-white">
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
