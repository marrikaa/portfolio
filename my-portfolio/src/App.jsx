import './App.css';
import { Route,Routes, useLocation } from 'react-router-dom';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { MySkills } from './Components/MySkills/MySkills';
import { MyProjects } from './Components/MyProjects/MyProjects';
import { NavBar } from './Components/NavBar/NavBar';
import { HomePage } from './Components/HomePage/HomePage';
import { ContanctForm } from './Components/ContactForm/ContactForm';
import { AnimatePresence } from 'framer-motion';


function App() {
 
  const location=useLocation();
  return (
    <div className="App circle">
      <AnimatePresence mode='wait' initial={false}>
          <NavBar />
          <Routes location ={location} key ={location.pathname}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/aboutMe" element={<AboutMe />}></Route>
              <Route path="/mySkills" element={<MySkills />}></Route>
              <Route path="/myProjects" element={<MyProjects />}></Route>
              <Route path="/contactForm" element={<ContanctForm />}></Route>
          </Routes>
          </AnimatePresence>
    </div>
  );
}

export default App;
