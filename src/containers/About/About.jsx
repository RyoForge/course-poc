import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './About.scss';
import { Images } from '../../constants';

const Numbers = [
  {
    count : '3000',
    name : 'Students',
    color: '#ffba00'
  },
  {
    count : '200',
    name : 'Courses',
    color: '#ff5f72'
  },
  {
    count : '4659',
    name : 'Hours Video',
    color: '#43cb83'
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
          <button onClick={() => setOpen(true)}><FaPlay/></button>
        </div>

        <div className='app__about-info'>
          <h1 className='head-text'>Endless opportunities, boundless potential at <br /> A-Spiders.</h1>
          <p className='p-text'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam laboriosam delectus harum, odit voluptate consectetur reprehenderit veniam error blanditiis eligendi, nisi modi accusantium quis, laborum dicta corrupti enim minus maiores!
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum obcaecati accusantium recusandae. Reprehenderit nihil sit quo, pariatur cum, saepe similique, voluptas facilis veritatis vitae quod ab est magnam reiciendis molestiae.
          </p>

          <div className='app__about-info-numbers'>
            {Numbers.map((item) => (
              <div className='app__about-info-number' style={{color: `${item.color}` }} key={item.name}>
                <h1>{item.count}</h1>
                <h4>{item.name}</h4>
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
