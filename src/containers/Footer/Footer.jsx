import React from 'react';
import './Footer.scss';
import { Images } from '../../constants';
import { BsTwitter, BsLinkedin, BsSkype, BsApple } from 'react-icons/bs';
import { FaFacebookSquare, FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-container'>

      <div className='app__footer-links'>
      <div className='app__footer-logo-section'>
      {/* <img src={Images.logo2} alt="logo"/> */}
      <h2>A-spiders Institute</h2>
      <p className='app__footer-desc'>A-Spiders specializes in training to Create exceptional  websites effortlessly. Stay ahead of the competition with new Technologies.</p>
      <div className='app__footer-social'>
      <a src="#" className='app__footer-social-icon' alt="social"><BsTwitter/></a>
      <a src="#" className='app__footer-social-icon' alt="social"><BsLinkedin/></a>
      <a src="#" className='app__footer-social-icon' alt="social"><FaFacebookSquare/></a>
      <a src="#" className='app__footer-social-icon' alt="social"><BsSkype/></a>
      <a src="#" className='app__footer-social-icon' alt="social"><FaPinterestSquare/></a>
      <a src="#" className='app__footer-social-icon' alt="social"><BsApple/></a>
      </div>
      </div>
      
      <div className='app__footer-featured'>
      <h4 className='app__footer-headings'>FEATURED PROGRAMS</h4>
      <a src="#" alt="links" className='app__footer-link'> STEM Excellence Program - <span>California</span></a><br/><br/>
      <a src="#" alt="links" className='app__footer-link'>Global Languages Program - <span>Spain</span></a><br/><br/>
      <a src="#" alt="links" className='app__footer-link'>Entrepreneurship Hub - <span>Bengaluru, India</span></a><br/><br/>
      <a src="#" alt="links" className='app__footer-link'> Arts & Creative Media Program - <span>USA</span></a>
      </div>

      <div className='app__footer-learning'>
      <h4>LEARNING</h4>
      <a src="#" alt="links" className='app__footer-learning-link'>Our Plans</a><br/><br/>
      <a src="#" alt="links" className='app__footer-learning-link'>Free Trial</a><br/><br/>
      <a src="#" alt="links" className='app__footer-learning-link'>Academic Solutions</a><br/><br/>
      <a src="#" alt="links" className='app__footer-learning-link'>Business Solutions</a>
      </div>
      </div>

      <div className='app__footer-contact'>
      <h4>SUPPORT FORUM</h4>
      <p>Write your email into below field and join our quick support forum.
      <div className='app__footer-input'>
      <input type="text" placeholder="Enter Your Email Adress"/>
      <button type='button'>GET HELP</button>
      </div>
      </p>
      </div>


      </div>

      <div className='app__footer-copyright'>
      <div className='app__footer-copyright-container'>
      <span>Copyright © 2024</span>
      <ul>
      {['Site Map', 'Privacy Policy', 'Website Use Policy', 'Cookie Policy'].map((item) => (
        <li>{item}</li>
      ))}
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer
