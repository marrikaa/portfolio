import './App.css';
import { Route,Routes } from 'react-router-dom';
import { AboutMe } from './Components/AboutMe/AboutMe';
import { MySkills } from './Components/MySkills/MySkills';
import { MyProjects } from './Components/MyProjects/MyProjects';
import { ContactInfo } from './Components/ContactInfo/ContactInfo';
import { NavBar } from './Components/NavBar/NavBar';
import { HomePage } from './Components/HomePage/HomePage';
import { ContanctForm } from './Components/ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/aboutMe" element={<AboutMe />}></Route>
          <Route path="/mySkills" element={<MySkills />}></Route>
          <Route path="/myProjects" element={<MyProjects />}></Route>
          <Route path="/contactForm" element={<ContanctForm />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
