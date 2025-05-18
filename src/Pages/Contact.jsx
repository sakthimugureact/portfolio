import React from 'react'

function Contact() {
  return (
    <>
     <div className="container contact-container mx-auto">
        <h1 className="contact-title namess text-primary">Get in Touch</h1>
        <p className="contact-subtitle fw-bold fs-3 pt-3">I'd love to hear from you!</p>
        
        <div className="row align-items-center">
            <div className="col-lg-6">
                <form>
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