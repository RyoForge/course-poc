import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import './Home.scss';

const Home = () => {
  useEffect(()=>{
    document.title="A-spiders Institute";
  },[]);
  return (
    <div id="home" className='app__home'>
    <motion.div
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    className="app__home-intro"
    >
      <h1 className='website-name'>
          <span className='highlight-text'>A-Spiders Institute</span>
        </h1>
    <h1>"Empowering education and<br/>advancing society."</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nemo, cum accusamus <br /> dolore tenetur</p>
    <button className='app__home-btn'>Visit our Campus</button>
    </motion.div>
  </div>
  )
}

export default Home;
