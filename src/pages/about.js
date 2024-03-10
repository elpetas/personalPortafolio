import React,{useRef} from "react";
import Navbar from "../components/navbar";
import "../css/about.css";
import Animation from "../components/animation";
import Scene from "../components/scene";
import star from '../images/star.png';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function About () {
  const block1Ref = useRef();
  const block2Ref = useRef();
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="about">
        <Navbar/>
        <div className="aboutContainer">
                <div className="block" ref={block1Ref}>
                   <div className="blockDescription">
                  <h2>A Mission Beyond Code</h2>
                  <p>
                    Beyond just writing code, I envision a world where technology is accessible to everyone. My mission? To bridge the digital divide and ensure that everyone, irrespective of their background, can benefit from the wonders of technology.
                  </p>
                  <FontAwesomeIcon icon={faChevronDown} className="arrow" onClick={() => scrollToRef(block2Ref)} />
                  </div>
                  <div className="animation">
                    <Scene/>
                  </div>
                  
                </div>
                 <div className="block1" ref={block2Ref}>
                  <div className="upArrow">
                    <FontAwesomeIcon icon={faChevronUp} className="arrow" onClick={() => scrollToRef(block1Ref)} />
                  </div>
                  <div className="blockPart">
                    <div className="starImg">
                      <img src={star} alt="star"/>
                    </div>
                    <div className="blockDescription" style={{textAlign:"end"}}>
                    <h2>Origins</h2>
                    <p>
                      I was born and raised amidst the breathtaking landscapes of Bolivia, where my deep-seated connection to the vibrant culture and unwavering resilience of its people was nurtured.<br/>
                      In 2019, my life took a significant turn as I relocated to the United States. Boise, Idaho became my new home and I pursued a degree in Computer Science at Boise State University.<br/>
                    </p>
                    </div>
                  </div>
                  <div className="blockPart">
                    
                    <div className="blockDescription">
                      <h2>Education</h2>
                      <p>
                        Intrigued by safeguarding the digital realm, I embarked on a journey specializing in Cybersecurity. However, as my career unfolded, a profound realization ignited a new passion within me. I yearned to create, to construct. And so, my transformation into a Full Stack Developer began. My repertoire now includes a diverse skill set, encompassing ReactJS, Node, SQL, JavaScript, PHP, HTML, CSS, and WordPress, as well as an adept familiarity with GitHub.
                      </p>
                    </div>
                    <div className="logos">
                      <Animation/>
                    </div>
                  </div>
                 </div>

        </div>
        
    </div>
  );
}

export default About;