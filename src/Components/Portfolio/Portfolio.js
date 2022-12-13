import React from 'react';
import './Portfolio.css'
import img1 from '../../assets/project1.webp'
import img2 from '../../assets/project2.jpg'
import img3 from '../../assets/project3.webp'


const data = [
    {
        id:1,
        image:img1,
        title:'Book Re-selling',
        des:'This Website is  about Book Reselling.It is a dynamic website using React, JavaScript...',
        github:'https://github.com/Mollika-deb/Book-reselling-client',
        live:' https://book-re-salling.web.app/'
    },
    {
        id:2,
        image:img2,
        title:'Quick Quiz',
        des:'This Website is  about Quiz. It is a dynamic website using React, JavaScript...',
        github:'https://github.com/Mollika-deb/Quick-quiz',
        live:' https://eclectic-stardust-23773d.netlify.app/'
    },
    {
        id:3,
        image:img3,
        title:'Study Routine',
        des:'This Website is  about study routine. It is a dynamic website using React, JavaScript...',
        github:'https://github.com/Mollika-deb/studty-routine',
        live:' https://jolly-peony-1c7a0e.netlify.app/'
    }
]

const Portfolio = () => {
    return (
       <section id='portfolio'>
        <h5>My Projects</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio-container'>
            {
                data.map(({id, image, title, github, live, des})=>{
                    return(
                        <article key={id} className='portfolio-item'>
                <div className='portfolio-item-img'>
                    <img src={image} alt=""></img>
                </div>
                
                <h3>{title}</h3>
                <p>{des}</p>
               <div className='portfolio-cta'>
               <a href={github} className='btn' target = '_blank'>Github</a>
                <a href={live} className='btn btn-primary' target = '_blank'>Live Demo</a>
               </div>

            </article>
                    )
                })
            }
           
        </div>
       </section>
    );
};

export default Portfolio;