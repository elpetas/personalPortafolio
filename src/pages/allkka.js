import React, { useState,useRef } from 'react';
import "../css/allkka.css";
import Navbar from '../components/navbar';
import Logo from '../images/allkka/logo.png';
import AllkkaC1 from '../images/allkka/AllkkaC1.png';
import AllkkaC2 from '../images/allkka/AllkkaC2.png';
import AllkkaC3 from '../images/allkka/AllkkaC3.png';
import AllkkaC4 from '../images/allkka/AllkkaC4.png';
import AllkkaC5 from '../images/allkka/AllkkaC5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactPlayer from "react-player";
function Allkka() {
  const allkkaDemo = useRef();
  const scrollToRef = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };
  const captures = [
    { img: AllkkaC1, alt: 'AllkkaC1' },
    { img: AllkkaC2, alt: 'AllkkaC2' },
    { img: AllkkaC3, alt: 'AllkkaC3' },
    { img: AllkkaC4, alt: 'AllkkaC4' },
    { img: AllkkaC5, alt: 'AllkkaC5' }
  ];
  const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnHover: true
    };
  return (
    <div className="allkka">
      <Navbar/>
      <div className="allkkaContainer">
        <div className="allkkaDescription">
          <img src={Logo} alt="Logo" />
          <p>
            Allkka stands as an exciting and innovative web application in the making, meticulously crafted with a technology stack that includes React, Node.js, and Express.js. It promises an exceptional user experience, offering a range of exciting features designed to enhance your interaction with music and music-related events.<br/><br/>

            One of Allkka's standout features is its seamless integration with Spotify, achieved through the utilization of Spotify's API. This integration allows users to effortlessly link their Spotify account, paving the way for a world of music-related possibilities. <br/><br/>

            With Allkka, festival-goers and music enthusiasts can conveniently upload images of festival lineups, like the iconic Coachella poster. What sets Allkka apart is its state-of-the-art technology. We employ Tesseract OCR (Optical Character Recognition) to extract text from these images with unmatched precision. Our integration of ChatGPT AI further enhances this process, enabling us to identify and catalog all the artists listed on the festival flyer.<br/><br/>

            What truly distinguishes Allkka is its ability to leverage this artist data. Our algorithm takes these recognized artists and compiles them into a personalized playlist, curated specifically for the user. This means that within a matter of minutes, you can enjoy a playlist filled with the very artists you're excited to see at the festival, creating a soundtrack that perfectly matches your taste.<br/><br/>

            And the best part? This playlist isn't just a virtual collection; it's effortlessly imported directly into your Spotify account, allowing you to enjoy it wherever and whenever you like. It's a seamless experience, eliminating the need for tedious manual playlist creation.<br/><br/>

            Allkka is currently still in development, to get a feel for the remarkable capabilities of Allkka, we invite you to explore our <span onClick={() => scrollToRef(allkkaDemo)} className="demoSpan">demo</span> below. This demonstration provides a firsthand look at how Allkka streamlines the process of creating personalized playlists and simplifies your music experience.<br/><br/>

          </p>
         </div>
         <div className="allkkaDemo" ref={allkkaDemo}>
            <h2>Allkka Demo</h2>  
          <ReactPlayer height='50vh' width='100vh' url="https://youtu.be/JELYSYNmocc" />
          </div>
        <div className="allkkaCaroussel">
          <h2>Alkka Screenshots</h2>
          <Slider {...settings}>
            {captures.map((capture, index) => (
              <div key={index} className='captureItem'>   
                <img src={capture.img} alt={capture.alt} />
              </div>
            ))}
          </Slider>
        </div>
         
      </div>
    </div>
  );
};

export default Allkka;


