import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jyve7gt', 'template_mkz426q', form.current, 'd5hs4WJ1rpmRL7eA2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" id="" placeholder='Your Message' rows="7" required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact
