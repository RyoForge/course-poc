import React, { useEffect, useRef } from 'react'; 
import ModalVideo from 'react-modal-video'; 
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Home.scss';
import { Images } from '../../constants';

const Home = () => {
  // Removed aboutUsRef and handleButtonClick

  useEffect(() => {
    document.title = "A-spiders Institute";
  }, []);

  return (
    <div id="home" className='app__home'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__home-intro"
      >
        <h1 className='website-name'>
          <span className='highlight-text'>A-Spiders  Institute</span>
        </h1>
        <h1>"Empowering education and<br/>advancing society."</h1>
        <p>Unlock your potential with our transformative programs, Expert faculty, and vibrant learning community.</p> 
        <button className='app__home-btn'>Visit our Campus</button> {/* Removed onClick handler */}
      </motion.div>

      <div id="about-us"> 
        {/* Your About Us content here */}
      </div>
    </div>
  );
}

export default Home;