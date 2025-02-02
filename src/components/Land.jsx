import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/Land.css';
import Profile from '../assets/profile.jpg';

const Land = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{border:'1px red solid !important'}} id='header-part' className="land-container">
      {/* Particles */}
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false, // Disable fullscreen
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              color: {
                value: '#ffffff',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000',
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                out_mode: 'out',
                bounce: false,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'repulse',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 60,
                  duration: 2,
                  opacity: 8,
                  speed: 0.5,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>

      {/* Content on top of particles */}
      <section className="land-content px-10 sm:px-10 lg:px-40 py-20  md:px-40 pb-40 pt-10  ">
        <div className='lg:gap-7  sm:gap-3 md:gap-5   grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
          <div className="text-section  md:flex-none flex flex-col justify-items-center text-center md:text-none   sm:my-10 sm:text-center md:text-left md:py-20">
            <h2 data-aos="fade-down" className="text-xl md:text-2xl "> Hi! My name is</h2>
            <h1 data-aos="fade-right" className="text_land text-3xl lg:text-4xl md:text-5xl xl:text-6xl font-bold">ASWINI P S</h1>
            <h1 data-aos="fade-left" className="md:text-3xl  text-xl">I Am a Full Stack Developer</h1>
            {/* <div  className='my-2'><a style={{borderRadius:'0 20px 0 20px'}} className='text-xl   text-white hover:text-sky-400 hover:bg-sky-400  border-2  border-sky-400 p-2 cursor-pointer relative' href="">Download My Resume</a></div> */}
          </div>
          <div></div>
         <div className='md:mt-0  mt-20    flex justify-center items-center md:flex-none'>
            <div className="image-section ">
              <img className="profile" src={Profile} alt="Profile" />
            </div>
         </div>
          
        </div>
      </section>
    </div>
  );
};

export default Land;
