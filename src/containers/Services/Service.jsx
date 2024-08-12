import React from 'react';
import './Service.scss';
import { Images } from '../../constants';
import { motion } from 'framer-motion';

const Services = [
  {
    imageURL : `${Images.service1}`,
    title : 'OnLine Training',
    color : '#f9703a'
  },
  {
    imageURL : `${Images.service2}`,
    title : 'OffLine Training',
    color : 'white'
  },
  {
    imageURL : `${Images.service3}`,
    title : 'E-Learning Education',
    color : '#80be41'
  }
]

const Service = () => {
  return (
    <div className='app__service'>
      <h1 className='head-text'>Our Department</h1>
      <p className='p-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum hic eligendi ullam facilis eius sed nostrum voluptatibus autem ad! Quod incidunt odio quam quia nobis aspernatur, eligendi esse? Vitae, necessitatibus!</p>
      <motion.div
      whileInView={{ y: [-50, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='app__services'>
      {Services.map((item) => (
        <div className='app__service-item' style={{backgroundColor: `${item.color}`}}>
        <img src={item.imageURL} alt="Service"/>
        <h4>{item.title}</h4>
        </div>
      ))}
      </motion.div>
    </div>
  )
}

export default Service;
