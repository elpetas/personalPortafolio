import React , {useEffect, useState} from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import {Link} from 'react-router-dom';
import "../css/happyGifter.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Capture1 from '../images/happyGifter/happyC1.png';
import Capture2 from '../images/happyGifter/happyC2.png';
import Capture3 from '../images/happyGifter/happyC3.png';
import Capture4 from '../images/happyGifter/happyC4.png';
import Capture5 from '../images/happyGifter/happyC5.png';
import Capture6 from '../images/happyGifter/happyC6.png';
import logo from '../images/happyGifter/logo.png';
function HappyGifter() {
     const settings = {
     dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnHover: true
     };
        const logos = [
        { img: Capture1, alt: 'Capture1' },
        { img: Capture2, alt: 'Capture2' },
        { img: Capture3, alt: 'Capture3' },
        { img: Capture4, alt: 'Capture4' },
        { img: Capture5, alt: 'Capture5' },
        { img: Capture6, alt: 'Capture6' }
        ];
    return (
        <div className="happyGifter">
            <Navbar/>
            <div className="happyGifterContainer">
                <div className="happyGifterDescription">
                    <img src={logo} alt="logo" />
                    <p>
                        Happy Gifter is a web application meticulously crafted for a burgeoning local startup in Boise. This cutting-edge platform allows users to seamlessly register and craft personalized subprofiles for their friends and family. Through the utilization of cutting-edge technologies and robust functionalities, Happy Gifter empowers users to curate profiles with a comprehensive array of interests, hobbies, and vital personal information, such as birthdates, shoe sizes, and clothing preferences. Furthermore, it introduces the concept of "boards," which are custom collections of potential gifts tailored to the individual's preferences.

The project boasts a tech stack that exemplifies technical prowess and modernity, comprising ReactJS for the dynamic user interface, NodeJS and ExpressJS for the server-side logic, and MySQL for data management. Leveraging the power of cloud services, Happy Gifter seamlessly integrates with AWS S3 for efficient image storage, ensuring a responsive and high-performance experience for users. The MailGun API has been harnessed for robust email communication, making it an indispensable part of the system's functionality.

To explore this project and experience its technical excellence firsthand, visit the website by clicking <a href='https://www.happygifter.com/'target="_blank"> here</a>
                    </p>
                </div>
                <div className="happyGifterCarousel">
                    <Slider {...settings}>
                        {logos.map((logo, index) => (
                            <div key={index} className='captureItem'>   
                                <img src={logo.img} alt={logo.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default HappyGifter;