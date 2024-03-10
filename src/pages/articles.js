import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import axios from "axios";
import TextAnimation from "../components/text";
import "../css/articles.css";
import article1 from "../images/articles/article1.jpg";
function Articles() {
    
    return (
      <div className="articles">
        <Navbar />
        <div className="articlesContainer">
          <div className="article">
            <div className="articleImg">
              <img src={article1} alt="article1" />
            </div>
            <div className="articleContent">
            <h3>Meet the New Faces of the Internet: The Creepy World of AI-Generated People</h3>
            <p>
In the ever-advancing realm of artificial intelligence, a remarkable phenomenon has arisen: the creation of entirely artificial individuals known as "deepfakes" through AI algorithms. These AI-generated people are becoming increasingly prevalent, finding applications in marketing, propaganda, and even identity theft, permeating every corner of technology. This article delves into the world of AI-generated individuals, uncovering their creation process, diverse applications, and the potential societal consequences they may bring. It also scrutinizes the inherent challenges surrounding deepfake generation, such as bias, privacy, and security concerns. By shedding light on the dark side of AI-generated people, this article aims to stimulate essential discussions about their impact on our lives and society as a whole. For an in-depth exploration of the topic, including insights into the technology behind deepfake creation and ethical concerns, continue reading</p>
            </div>
          </div>
        </div>
      </div>  
        
    );
    }
export default Articles;