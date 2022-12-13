import React from 'react';
import './About.css';
import { BsAward, BsFolder2 } from 'react-icons/bs';
import {TbUserSearch} from 'react-icons/tb';
import img from '../../assets/img 5.jpg';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-me-img'>
                        <img src={img} alt=""></img>
                    </div>

                </div>
                <div className='about-contact'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <BsAward className='about-icon'></BsAward>
                            <h5>Experience</h5>
                            <small>1+ Year working</small>
                        </article>
                        <article className='about-card'>
                            <TbUserSearch className='about-icon'></TbUserSearch>
                            <h5>Clients</h5>
                            <small>50+ Clients</small>
                        </article>
                        <article className='about-card'>
                            <BsFolder2 className='about-icon'></BsFolder2>
                            <h5>Projects</h5>
                            <small>12+ completed</small>
                        </article>
                    </div>
                   <div className='about-content'>
                   <p >A front-end developer architects and develops websites and applications using web technologies (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open Web Platform or act as compilation input for non-web platform environments (i.e., React Native).</p>
                    <a href= "#contact" className='btn btn-primary'>Let's Talk</a>
                   </div>

                </div>
            </div>
        </section>
    );
};

export default About;