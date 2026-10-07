import { motion } from "motion/react";
import HEADER from "./components/Header";
import SOLUTIONS from "./components/Solutions";
import HERO from "./components/Hero";
import SPECIALTIES from "./components/Specialties";
import PROCESSLIST from "./components/ProcessList";
import PROJECTS from "./components/Projects";
import FOOTER from "./components/Footer";
import CONTACTUS from "./components/ContactUs";
import ABOUTME from "./components/AboutMe";
import "./App.css";

function App() {
  return (
    //MENU HEADER
    <div className="site">
      
      <HEADER brand="TECH SOLUTIONS"/>

      <main>

      <HERO/>

      <SPECIALTIES/>
      
      <SOLUTIONS/>
      
      <PROCESSLIST/>

      <PROJECTS/>

      <ABOUTME/>

      <CONTACTUS/>
      
      </main>
      <FOOTER/>

    </div>
  );
}







export default App;
