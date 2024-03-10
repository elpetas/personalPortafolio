import React from 'react';
import './App.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as THREE from 'three';
import TextAnimation from './components/text';
import resumeFileUrl from './pdf/Johann_Vargas_Resume_2023.pdf';
const Navbar = React.lazy(() => import('./components/navbar'));
function App() {

  return (
    <div className="anim">
      <Navbar />
      <div className='info'>
      <div className="InfoContainer">
        <h1>Hello My Name is Johann</h1>
        <h2>I Am a Full Stack Developer</h2>
        <a href={resumeFileUrl} target="_blank" rel="noopener noreferrer">
        <button>Download Resume</button>
        </a>
      </div>
      </div>
      <TextAnimation color={0xed4248}/>  
    </div>
  );
}

export default App;
