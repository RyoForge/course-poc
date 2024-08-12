import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { Images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={Images.studentlogo} alt="Logo" />
      </div>

      <div className='app__navlinks'>
        <ul>
          {['Home', 'About Us', 'Courses', 'Contact'].map((item) => (
            <li className='app__navlink' key={`link-${item}`}>
              <a href={item === 'Contact' ? '#footer' : `#${item.replace(/\s+/g, '')}`}>{item}</a>
            </li>
          ))}
        </ul>
        <button className='app__navbar-btn'>Apply now</button>
      </div>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: 300,
              transition: { duration: 0.5, type: "spring", damping: 10 }
            }}
            exit={{
              width: 0
            }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'About Us', 'Courses', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={item === 'Contact' ? '#footer' : `#${item.replace(/\s+/g, '')}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className='app__navbar-menu-btn'>Apply now</button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
