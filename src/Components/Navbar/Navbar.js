import React, { useState } from 'react';
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai'
import {FiUserX} from 'react-icons/fi'
import {BiBookmarkAltPlus} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GrContact} from 'react-icons/gr'
import {ImBlogger} from 'react-icons/im'

const Navbar = () => {
    const [active,  setActive] = useState('#')
    return (
       <nav>
        <a href="#" onClick={()=> setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={()=> setActive('#about')}  className={active === '#about' ? 'active' : ''}><FiUserX></FiUserX></a>
            <a href="#experience" onClick={()=> setActive('#experience')}  className={active === '#experience' ? 'active' : ''}><BiBookmarkAltPlus></BiBookmarkAltPlus></a>
            <a href="#portfolio" onClick={()=> setActive('#portfolio')}  className={active === '#portfolio' ? 'active' : ''}><RiServiceLine></RiServiceLine></a>
            <a href="#contact" onClick={()=> setActive('#contact')}  className={active === '#contact' ? 'active' : ''}><GrContact></GrContact></a>
            <a href="#blog" onClick={()=> setActive('#blog')}  className={active === '#blog' ? 'active' : ''}><ImBlogger></ImBlogger></a>
       </nav>
    );
};

export default Navbar;