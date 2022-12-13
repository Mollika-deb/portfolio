import React, { useRef } from 'react';
import './Contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from 'emailjs-com';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2pisbxw', 'service_2pisbxw', form.current, 'kuBw_vbaRlHsZRwQF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact-container'>
            <div className='contact-options'>
                <article className='contact-option'>
                    <TfiEmail className='contact-icon'></TfiEmail>
                    <h4>Email</h4>
                    <h5>mollika1551@gmail.com</h5>
                    <a href='mailto:mollika1551@gnail.com'>Send a message</a>
                </article>
                <article className='contact-option'>
                    <RiMessengerLine className='contact-icon'></RiMessengerLine>
                    <h4>Messenger</h4>
                    <h5>Molika Deb</h5>
                    <a href='https://web.facebook.com/'>Send a message</a>
                </article>

            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Type Your Name' required></input>
                <input type='email' name='email' placeholder='Type Your Email' required></input>
                <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
      </section>
    );
};

export default Contact;