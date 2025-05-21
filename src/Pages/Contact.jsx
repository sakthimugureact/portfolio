import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
     const form = useRef();
    const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_kpt4sqq', 'template_50s4kjs', form.current, '2IHcUhA68CratbMF_')
                .then((result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');    
                }, (error) => {     
                    console.log(error.text);
                    alert('Failed to send message, please try again later.');
                });
        };
  return (
    <>
     <div className="container contact-container mx-auto" id='contact'>
        <h1 className="contact-title namess text-primary" style={{letterSpacing:"5px"}}>Contact</h1>
        <p className="contact-subtitle fw-bold fs-3 pt-3">I'd love to hear from you!</p>
        
        <div className="row align-items-center">
            <div className="col-lg-6">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Full Name:</label>
                        <input type="text" className="form-control" id="fullName" placeholder="Your Name" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Your Email ID" />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message:</label>
                        <textarea className="form-control" id="message" placeholder="Your Message..."></textarea>
                    </div>
                    
                    <div className="text-start">
                        <button type="submit" className="submit-btn">SUBMIT</button>
                    </div>
                </form>
            </div>
            
            <div className="col-lg-6 d-flex justify-content-center">
                <img src="/images/contact.png" alt="Contact Illustration" className="contact-image" />
            </div>
        </div>
    </div></>
  )
}

export default Contact