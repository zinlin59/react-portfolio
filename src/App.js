
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import HomePage from './components/HomePage/HomePage';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>

      <HomePage />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
