import React from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="flex">
      <div className='w-[25%] '>

      <Sidebar />
      </div>
      <div className="flex-1 p-4 w-[75%] dark:bg-gray-900 dark:text-white transition duration-500">
        <ThemeToggle />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
