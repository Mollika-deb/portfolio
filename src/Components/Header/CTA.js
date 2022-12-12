import React from 'react';
import cv from '../../assets/cv.pdf.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href ={cv} className='btn'>My Resume</a>
            <a href ='#contact' className='btn btn-primary'>Contact me</a>
            
        </div>
    );
};

export default CTA;