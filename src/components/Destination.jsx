import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { motion } from 'framer-motion';

const cookies = new Cookies();
if (cookies.get('destination') == null){
    cookies.set('destination', 'Moon', {sameSite: 'lax'})
}

function Destination( destination ) {
    const [place, setPlace] = useState(cookies.get('destination'));
    const prop = destination.prop;
    const mainanimation = {
      animatem: { scale: [0.75, 1.05, 1], opacity: [0, 0.25, 0.5, 1] },
    }
    
    const destinationanimation = {
      animated: {scale: [0.25, 1.1, 1], opacity: [0, 0.45, 0.9, 1]},
    }

    const destinationtextanimation = {
      animatedt: {scale: [0.75, 1.05, 1], opacity: [0, 0.45, 0.9, 1]},
    }

    console.log(prop);

    useEffect(() => {
        setPlace(cookies.get('destination'));
        document.getElementById(cookies.get('destination')).parentElement.classList.add('active-destination')
    }, [])

    function changeDestination(destination, e) {
      document.querySelectorAll('.active-destination').forEach((item) => {
        item.classList.remove('active-destination')
      })
      e.target.parentElement.classList.add('active-destination')
      setPlace(destination);
      cookies.set('destination', destination, {sameSite: 'lax'})
    }

    return (
        <motion.section 
            className='destination'
            initial={{scale: 0.75, opacity: 0}}
            animate="animatem"
            transition={{ times: [0, 0.1, 0.9, 1], duration: 0.4 }}
            variants={mainanimation}
        >
            <div className="left-column">
              <h2><span>01</span> Pick your destination</h2>
                {prop.filter(data => data.name === place).map(data => (
                    <motion.div className="planet" key={data.name} 
                    variants={destinationanimation} 
                    initial={false}
                    animate="animated"
                    transition={{ times: [0, 0.1, 0.9, 1], duration: 0.5 }} >
                        <img src={data.images.png} alt={data.name} />
                    </motion.div>
                ))} 
                <div className='navigation'>
                  {prop.map(data => (
                    <div className="button-container" key={data.name}>
                      <button id={data.name} onClick={(e) => changeDestination(data.name, e)}>{data.name}</button>
                    </div>
                  ))}
                </div>
            </div>  
            <div className="right-column" >
                {prop.filter(data => data.name === place).map(data => (
                    <motion.div className="text" key={data.name}  variants={destinationtextanimation} initial={false} animate="animatedt" transition={{ times: [0, 0.1, 0.9, 1], duration: 0.5 }}>
                        <h2>
                          { data.name }
                        </h2>
                        <p>
                          { data.description }
                        </p>
                        <span className='line'></span>
                        <div className="stats">
                          <div className="stat">
                            <h4>avg. distance</h4>
                            <h3>{ data.distance }</h3>
                          </div>
                          <div className="stat">
                            <h4>est. travel time</h4>
                            <h3>{ data.travel }</h3>
                          </div>
                        </div>
                    </motion.div>
                ))} 
            </div>
        </motion.section>
    )
}

export default Destination