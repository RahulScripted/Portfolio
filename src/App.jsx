import {Routes,Route} from 'react-router-dom'
import './index.css'
import NavBar from "./components/NavBar";
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Thoughts from './Pages/Thoughts';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="min-h-screen text-white">
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/thoughts' element={<Thoughts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
