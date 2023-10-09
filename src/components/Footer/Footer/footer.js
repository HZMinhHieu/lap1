// footer.js
import './footer.css'
import React from 'react';
function Footer() {
  return (
    <footer>

      <div className="footer-content">
        <div className='content-footer'>
          <div className='left-footer'>
            <h2>WiSchool</h2>

            <p>
              We are not here to sell you products, we sell value through our expertise.
            </p>


          </div>
          <div className='right-footer'>
            <div className="footer-links">
              <div className="footer-links-col">
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/training">Training</a>
                <a href="/resources">Resources</a>
                <a href="/about">About Us</a>
              </div>

              <div className="footer-links-col">
                <a href="/sme">SME</a>
                <a href="/solutions">Solutions</a>
                <a href="/reviews">Reviews</a>
                <a href="/blog">Blog</a>
              </div>
         
              <div className="footer-links-col">
                <a href="/contact">Contact Us</a>
                <a href="/call">Place a Call</a>
                <a href="/email">Email</a>

                <span>Wischool@gmail.com</span>

              </div>

              <div className="footer-links-col">
                <a href="/jobs">Job Openings</a>
                <a href="/news">News</a>
                <a href="/research">Research</a>
              </div>
              <div className="footer-links-col">
                <a href="/policy">UK Privacy Policy</a>
                <a href="/terms">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-subscribe">
          <h3>Subscribe to get latest updates</h3>

          <div className="subscribe-form">
            <input placeholder="Your Email address" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;