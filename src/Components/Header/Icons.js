import React from 'react';
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'

const Icons = () => {
    return (
        <div className='icons'>
            <a href="https://www.linkedin.com/in/mollika-deb-2a28a6259/" target="_blank"><SiLinkedin></SiLinkedin></a>
            <a href="https://github.com/Mollika-deb" target="_blank"><BsGithub></BsGithub></a>
        </div>
    );
};

export default Icons;