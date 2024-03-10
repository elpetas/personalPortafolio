import React, { useState, useRef } from 'react';
import Navbar from "../components/navbar";
import "../css/github.css";
import githubLogo from "../images/logos/github_logo.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactPlayer from "react-player";
import findMeaBreakC1 from "../images/findMeaBreak/FindMeaBreakC1.png";
import findMeaBreakC2 from "../images/findMeaBreak/FindMeaBreakC2.png";
import findMeaBreakC3 from "../images/findMeaBreak/FindMeaBreakC3.png";
import findMeaBreakC4 from "../images/findMeaBreak/FindMeaBreakC4.png";
import findMeaBreakC5 from "../images/findMeaBreak/FindMeaBreakC5.png";
import discordBotC1 from "../images/discordBot/musicBotC1.png";
import discordBotC2 from "../images/discordBot/musicBotC2.png";
import discordBotC3 from "../images/discordBot/musicBotC3.png";
import TextAnimation from "../components/text";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Github() {
   const findMeABreakRef = useRef();
    const schoolSystemRef = useRef();
    const discordBotRef = useRef();
    const bannerRef = useRef();
    const scrollToRef = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnHover: true
    };
    const findMeaBreak = [
        { img: findMeaBreakC1, alt: 'Find Me a Break' },
        { img: findMeaBreakC2, alt: 'Find Me a Break' },
        { img: findMeaBreakC3, alt: 'Find Me a Break' },
        { img: findMeaBreakC4, alt: 'Find Me a Break' },
        { img: findMeaBreakC5, alt: 'Find Me a Break' }
    ];
    const discordBot = [
        { img: discordBotC3, alt: 'Discord Bot' },
        { img: discordBotC1, alt: 'Discord Bot' },
        { img: discordBotC2, alt: 'Discord Bot' },
        
    ];
    function Banner(){
        return (
            <div className="banner" ref={bannerRef}>
      <Navbar />
      <div className='bannerInfo'>
      <div className="bannerContainer">
        <h1>Github Projects</h1>
        <h2>Some Highlited Github Repositories<br/>or<br/> Directly Access <a href='https://github.com/elpetas' target="_blank">My Github Page</a></h2>
        <FontAwesomeIcon icon={faChevronDown} className="arrow-down" onClick={() => scrollToRef(findMeABreakRef)} />
      </div>
      </div>
      <TextAnimation color={0x0a0194}/>  
    </div>
        );
    }
    function DiscordBot(){
        return (
            <div className="githubProject" ref={discordBotRef}>
                <div className="arrows">
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-up" onClick={() => scrollToRef(schoolSystemRef)} />
                    <h2>Discord Bot</h2>
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-down" onClick={() => scrollToRef(bannerRef)} />
                </div>
                <div className="githubProjectImages">
                    <Slider {...settings}>
                        {discordBot.map((discordBot, index) => (
                            <div key={index} className='discordBot-item'>
                                <img src={discordBot.img} alt={discordBot.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <p>
                    This project is a Discord Bot that plays music and has a variety of other commands such as telling jokes. It was developed using NodeJS and DiscordJS. you can access the repository <a href="https://github.com/elpetas/Discord-Music-Bot">here</a>
                </p>        
            </div>
        );
    }
    function SchoolSystem (){
        return(
            <div className="githubProject" ref={schoolSystemRef}>
                 <div className="arrows">
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-up" onClick={() => scrollToRef(findMeABreakRef)} />
                    <h2>School Management System</h2>
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-down" onClick={() => scrollToRef(discordBotRef)} />
                </div>
                <div className="githubProjectImages">
                    <ReactPlayer url="https://www.youtube.com/watch?v=wgC8TEH43ms" />
                </div>
                <p>
                    This program is a Grade Management System implemented in Java. It interacts with a MySQL database to store and manage information about classes, students, assignments, and grades. The program provides a command-line interface that allows users to create new classes, add students, add assignments, grade assignments, and view grades. you can access the repository <a href="https://github.com/elpetas/School-Gradebook-System">here</a>
                </p>
            </div>
        );
    }
    function FindMeabreak(){
        return(
            <div className="githubProject" ref={findMeABreakRef}>
                <div className="arrows">
                    <FontAwesomeIcon icon={faChevronUp} className="arrow-up" onClick={() => scrollToRef(bannerRef)} />
                    <h2>Find me a break</h2>
                    <FontAwesomeIcon icon={faChevronDown} className="arrow-down" onClick={() => scrollToRef(schoolSystemRef)} />
                </div>
                <div className="githubProjectImages">
                    <Slider {...settings}>
                        {findMeaBreak.map((findMeaBreak, index) => (
                            <div key={index} className='findMeaBreak-item'>
                                <img src={findMeaBreak.img} alt={findMeaBreak.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <p>
                   "Find Me a Break" is a web application designed to assist users in discovering the spring break dates for colleges across the United States. It provides college reviews and recommends popular spring break destinations for each college. The project was developed using HTML, CSS, PHP, Ajax, Jquery, PDO for database connections, and SQL. you can access the repository <a href="https://github.com/JohannVargas/cs401">here</a>
                </p>
            </div>
        );
    }
    return (
    <div className="github">
        <Banner />
        <div className="githubProjects">
            <FindMeabreak />
            <SchoolSystem />
            <DiscordBot />

        </div>
    </div>
    );
    }
export default Github;
