import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../../assets/Images/headshot.png'
import './Hero.css'

function Hero() {
  return (
<>
<header className="masthead mb-0">
    <div className="container h-200 w-400">
      <div className="row h-200 w-400">
        <div className="col-lg-5 ">
          <div className="header-content mb-4 mt-10">
          <div className="container">
            <h2 className="text mb-5 mt-10 d-flex justify-content-center">Hello,
            my name is Nicole Sharpe. A Web Developer with a background in Graphic Design. </h2>
            </div>
            {/* <NavLink to="/contact" className="btn btn-outline-light btn-xl">Hire me</NavLink> */}
          </div>
        </div>
        <div className="col-lg-7 my-auto">
          <div className="device-container">

            <img className="blob img-fluid" src={Image} alt="a headshot of nicole Sharpe"/>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className="separator mt-0">
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#ad96c7" fillOpacity="1"
        d="M0,256L60,261.3C120,267,240,277,360,250.7C480,224,600,160,720,117.3C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
      </path>
    </svg> */}
    </div>
    </>
  );
}

export default Hero;