import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar.jsx"
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects';
import ProjectGallery from "./Components/Project-Gallery/Project-Gallery";


function App() {

  return (
    <>
<Navbar/>
 <Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/contact" element={<Contact/>} />
 <Route path="/projects" element={<ProjectGallery/>} />
</Routes>

</>
  ) 
  
}

export default App;
