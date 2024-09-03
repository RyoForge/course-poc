import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
// import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.scss';
import { Images } from '../../constants';

const Numbers = [
  {
    count: '3000+',
    name: 'Students',
    color: '#FFA500', 
    style: { 
      fontWeight: 'bold', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' 
    }
  },
  {
    count: '200+',
    name: 'Courses',
    color: '#FFFF00',
    style: { 
      fontWeight: 'bold', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }
  },
  {
    count: '4659+',
    name: 'Hours Video',
    color: '#76FF03', 
    style: { 
      fontWeight: 'bold', 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
    }
  }
];

const About = () => {
  const [isOpen, setOpen] = useState(false); 

  return (
    <div className='app__about'>
      <div className='app__bg-circle'/>
      <motion.div
        whileInView={{ y: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__about-items'>
        <div className='app__about-play'> 
          <img src={Images.about} className="app__about-play-img" alt="About"/>
          <img src={Images.leaf} className="app__about-leaf" alt="leaf"/>   

        </div> 

        <div className='app__about-info'>
          <h1 className='head-text'>Endless opportunities, boundless potential at <br /> A-Spiders.</h1>

          <div style={{ padding: '1rem' }}> 
            <p className='p-text' style={{ fontSize: 19, color: '#FFFFFF' }}> 
              At A-Spiders, we're passionate about empowering learners to achieve their dreams. Our comprehensive courses, experienced instructors, and vibrant community provide the perfect environment for growth and success.
            </p>

            <p className='p-text' style={{ fontSize: 19, color: '#FFFFFF' }}> 
              Whether you're a beginner taking your first steps or a seasoned professional seeking to upskill, we have the resources and support to help you reach your full potential. Join us today and unlock a world of possibilities!
            </p>
          </div>

          <div className='app__about-info-numbers'>
            {Numbers.map((item) => (
              <div className='app__about-info-number' key={item.name}>
                <h1 style={{ ...item.style, color: item.color }}>{item.count}</h1> 
                <h4 style={{ ...item.style, color: item.color }}>{item.name}</h4>  
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <ModalVideo 
        // channel='youtube' 
        // autoplay 
        // isOpen={isOpen} 
        // videoId="4WXlt2dApLc" 
        // onClose={() => setOpen(false)} 
        // className="react-modal-video"
      />
    </div>
  );
};

export default About;