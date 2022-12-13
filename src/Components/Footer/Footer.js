import React from 'react';
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai';
import './Footer.css'

const Footer = () => {
    return (
      <footer>
        <a href='#' className='footer-logo'>Personal React Portfolio</a>
        <ul className='links'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            
        </ul>
        <div className='footer-icon'>
            <a href="https://facebook.com"><BsFacebook></BsFacebook></a>
            <a href="https://instagram.com"><BsInstagram></BsInstagram></a>
            <a href="https://twitter.com"><AiOutlineTwitter></AiOutlineTwitter></a>
        </div>

        <div className='footer-copy'>
            <small>REACT-PORTFOLIO. All rights reserved by @mollika1551@gmail.com</small>
        </div>
      </footer>
    );
};

export default Footer;