import React from 'react';
import CTA from './CTA'
import img from '../../assets/img2.png'
import Icons from './Icons';

const Header = () => {
    return (
      <header>
            <div  className='container header-container'>
                <h5>Hello I'm</h5>
                <h1>Mollika Deb</h1>
                <h5 className='text-light'>Frontend Developer</h5>
                <CTA></CTA>
                <Icons></Icons>

                <div className='me'>
                    <img src={img} alt = ""/>
                </div>

                    <a href="#contact" className='scrol_down'>Scroll Down</a>

            </div>
      </header>
    );
};

export default Header;