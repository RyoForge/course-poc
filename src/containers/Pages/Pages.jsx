import React from 'react';
import './Pages.scss';
import { Images } from '../../constants';
import { motion } from 'framer-motion';

const pagesContent = [
  {
    imageURL: `${Images.graphic}`,
    title: "Full Stack Java Essential Training: The Basics",
    course: "Java Course",
    src: '#'
  },

  {
    imageURL: `${Images.globalsystem}`,
    title: "Flutter Development of  Android Apps With Kotlin",
    course: "App Development",
    src: '#'
  },

  {
    imageURL: `${Images.cit}`,
    title: "MERN Stack, Zero to Hero",
    course: "Web Development",
    src: '#'
  },
  {
    imageURL: `${Images.webdev}`,
    title: "MEAN Stack, Zero to Hero",
    course: "Web Development",
    src: '#'
  },
  {
    imageURL: `${Images.art}`,
    title: "Python Full Stack Development",
    course: "Python Course",
    src: '#'
  },
  {
    imageURL: `${Images.music}`,
    title: "Software Testing and Integration",
    course: "Testing Course",
    src: '#'
  },
  {
    imageURL: `${Images.techinfo}`,
    title: "Handling of DataBase with SQL",
    course: "DataBase Management",
    src: '#'
  },
  {
    imageURL: `${Images.datascience}`,
    title: "C, C+ and other programming language",
    course: "Programming languages",
    src: '#'
  }
]

const Pages = () => {
  return (
    <div className='app__page-section'>
    <div className='app__pages'>
    <h1 className='head-text'>Courses offered by the Institute</h1>
    <div className='app__page-items'>
    {pagesContent.map((item) => (
      <motion.div
      whileInView={{ y: [-50, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__page-item"
    >
      <img src={item.imageURL} alt="course"/>
      <a src={item.src} alt="title" className='app__page-course'>{item.title}</a>
      <h6>{item.course}</h6>
      <a src={item.src} alt="keep reading" className='app__page-course-link'>Keep reading...</a>
    </motion.div>
    ))}
    
    </div>
    
    </div>
    '
    </div>
  )
}

export default Pages;
