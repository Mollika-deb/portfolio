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
                   <p>Hello! I'm Mollika and I work as a front-end developer.I recently received my four-year degree in computer science and engineering from Sylhet Engineering College. I have a good foundation in HTML, CSS, and JavaScript and a strong understanding of web design concepts and best practices.My portfolio includes a wide range of projects. I have experience working with React.
Along with my technical abilities, I have a great sense of collaboration and communication.If you're searching for a front-end developer who is enthusiastic about building stunning and useful websites, please get in touch with me. Please feel free to browse my portfolio, read my blog, or get in touch with me directly to explore any possible prospects.
</p>
                    <a href= "#contact" className='btn btn-primary'>Let's Talk</a>
                   </div>

                </div>
            </div>
        </section>
    );
};

export default About;