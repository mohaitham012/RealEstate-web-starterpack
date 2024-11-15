import React from 'react';
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container paddings flexCenter innerWidth">

        <div className="flexColsStart left-container">
          <div className="hero-title">
            <div className="orange-circle"/>
            <motion.h1
            initial={{y:"2rem", opacity:0}}
            animate={{y: 0, opacity:1}}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            >Discover <br/> Most Suitable <br/>property</motion.h1>
          </div>

          <div className="flexColsStart hero-des">
            <span>Find a variety of properties that suit you very easily</span>
            <br />
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar">
          <h2><HiLocationMarker color="var(--blue)" size={25} /></h2>            
          <input type="text" className='search'/>
            <button className='button'>Search</button>
          </div>

          <div className="flexCenter stats" >
          <div className="flexColStart stat ">
            <span>
              <CountUp start={8800} end={9000} duration={2}/>
              <span >+</span>
            </span><span className='secondaryText'>
              Premium Products
            </span>
          </div>

          <div className="flexColStart stat ">
            <span>
              <CountUp start={1950} end={2000} duration={4}/>
              <span >+</span>
            </span><span className='secondaryText'>
              Happy Customers
            </span>
          </div>

          <div className="flexColStart stat ">
            <span>
              <CountUp end={28} />
              <span >+</span>
            </span><span className='secondaryText'>
              Award winning
            </span>
          </div>

          </div>
        </div>

        <div className="right-container ">
        <motion.div 
        initial={{x: '7rem',opacity:0}}
        animate={{x: 0,opacity:1}}
        transition={{
          duration: 2,
          type:'spring'
        }}

        className="image-container">
          <img src='./hero-image.png' className='img' width={100} height={100}/>
        </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
