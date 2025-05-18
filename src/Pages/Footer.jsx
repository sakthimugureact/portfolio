import React from 'react'
import { FaTwitter, FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <>
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="d-flex justify-content-center gap-4">

              <a href="#" className="text-white fs-4 text-decoration-none">
                <FaTwitter className="hover-icon" />
              </a>

              <a href="#" className="text-white fs-4 text-decoration-none">
                <FaGithub className="hover-icon" />
              </a>

              <a href="mailto:your@email.com" className="text-white fs-4 text-decoration-none">
                <FaEnvelope className="hover-icon" />
              </a>

              <a href="#" className="text-white fs-4 text-decoration-none">
                <FaLinkedin className="hover-icon" />
              </a>
            </div>
            <p className="mt-3 mb-0">© 2025 Mugunthan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer