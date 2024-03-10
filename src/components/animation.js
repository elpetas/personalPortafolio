import React, { useEffect } from "react";
import "../css/animation.css";
import c_logo from '../images/logos/c_logo.png';
import css_logo from '../images/logos/css_logo.png';
import html_logo from '../images/logos/html_logo.png';
import js_logo from '../images/logos/js_logo.png';
import react_logo from '../images/logos/react_logo.png';
import php_logo from '../images/logos/php_logo.png';
import wordpress_logo from '../images/logos/wordpress_logo.png';
import java_logo from '../images/logos/java_logo.png';
import nodeJS_logo from '../images/logos/nodeJS_logo.png';
function Animation() {
  useEffect(() => {
    // Function to set up the marquee animation
    const setupMarquee = () => {
      const root = document.documentElement;
      const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
      const marqueeContent = document.querySelector("ul.marquee-content");

      if (marqueeContent) {
        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
          marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
      }
    };

    // Call the setupMarquee function after the component is mounted
    setupMarquee();
  }, []);
  const logos = [
    { img: c_logo, alt: 'C' },
    { img: css_logo, alt: 'CSS' },
    { img: html_logo, alt: 'HTML' },
    { img: js_logo, alt: 'JavaScript' },
    { img: react_logo, alt: 'React' },
    { img: php_logo, alt: 'PHP' },
    { img: wordpress_logo, alt: 'WordPress' },
    { img: java_logo, alt: 'Java' },
    { img: nodeJS_logo, alt: 'NodeJS'}
  ];
  return (
    <div className="marqueContainer">
     <div class="marquee">
        <ul class="marquee-content">
          {logos.map((logo, index) => (
            <li key={index} className='logoItem'>   
              <img src={logo.img} alt={logo.alt} />
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
}

export default Animation;
