import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { motion } from 'framer-motion';

const cookies = new Cookies();
if (cookies.get('crew') == null){
    cookies.set('crew', 'Douglas Hurley', {sameSite: 'lax'})
}

function Crew( crew ) {
    const [person, setPerson] = useState(cookies.get('crew'));
    const prop = crew.prop;
    console.log(prop);

    const mainanimation = {
        animatem: { scale: [0.75, 1.05, 1], opacity: [0, 0.25, 0.5, 1] },
    }
    const crewimganimation = {
        animated: {scale: [0, 1.1, 1], opacity: [0, 0.45, 0.9, 1]},
    }

    const crewtextanimation = {
        animatedt: {scale: [0.75, 1.05, 1], opacity: [0, 0.45, 0.9, 1]},
      }

    useEffect(() => {
        setPerson(cookies.get('crew'));
        document.getElementById(cookies.get('crew')).classList.add('active-crew')
    }, [])

    function changeCrew(person, e) {
        document.querySelectorAll('.active-crew').forEach((item) => {
            item.classList.remove('active-crew')
        })
        e.target.classList.add('active-crew')
        setPerson(person);
        cookies.set('crew', person, {sameSite: 'lax'})
    }

    return (
        <motion.section
        className='crew'
        initial={{scale: 0.75, opacity: 0}}
        animate="animatem"
        transition={{ times: [0, 0.1, 0.9, 1], duration: 0.4 }}
        variants={mainanimation}
        >
            <div className="left-column">
                <div className='navigation'>
                    {prop.map(data => (
                        <button key={data.name} id={data.name} onClick={(e) => changeCrew(data.name, e)}></button>
                    ))} 
                </div>
                {prop.filter(data => data.name === person).map(data => (
                    <motion.div className="person" key={data.name}  variants={crewtextanimation} initial={false} animate="animatedt" transition={{ times: [0, 0.1, 0.9, 1], duration: 0.5 }}>
                        <h3>
                            { data.role }
                        </h3>
                        <h2>
                            { data.name }
                        </h2>
                        <p>
                            { data.bio }
                        </p>
                    </motion.div>
                ))} 
            </div>
            <div className="right-column">
                <h2><span>02</span> meet your crew</h2>
                {prop.filter(data => data.name === person).map(data => (
                    <div className="image" key={data.name}>
                        <motion.img 
                        src={data.images.webp} 
                        alt={data.name} 
                        variants={crewimganimation} 
                        initial={false}
                        animate="animated"
                        transition={{ times: [0, 0.1, 0.9, 1], duration: 0.5 }}
                        />
                    </div>
                ))} 
            </div>
            <div className="background"></div>
        </motion.section>
    )
}

export default Crew