import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { motion } from 'framer-motion';

const cookies = new Cookies();
if (cookies.get('technology') == null){
    cookies.set('technology', 'Launch vehicle', {sameSite: 'lax'})
}

function Technology( technology ) {
    const [tech, setTech] = useState(cookies.get('technology'));
    const [orientation, setOrientation] = useState('');
    const prop = technology.prop;

    window.addEventListener(('resize'), checkOrientation)

    const mainanimation = {
        animatem: { scale: [0.75, 1.05, 1], opacity: [0, 0.25, 0.5, 1] },
    }
    const technologyimganimation = {
        animated: {scale: [0.5, 1.1, 1], opacity: [0, 0.45, 0.9, 1]},
    }

    const technologytextanimation = {
        animatedt: {scale: [0.75, 1.05, 1], opacity: [0, 0.45, 0.9, 1]},
    }

    useEffect(() => {
        document.getElementById(cookies.get('technology')).classList.add('active-technology')
        checkOrientation()
    }, [])

    function changeTechnology(tech, e) {
        document.querySelectorAll('.active-technology').forEach((item) => {
            item.classList.remove('active-technology')
        })
        e.target.classList.add('active-technology')
        setTech(tech);
        cookies.set('technology', tech, {sameSite: 'lax'})
    }

    function checkOrientation() {
        if (window.innerWidth > 991){
            setOrientation("portrait")
        }
        else{
            setOrientation("landscape")
        }
    }

    return (
        <motion.section 
            className='technology'
            initial={{scale: 0.75, opacity: 0}}
            animate="animatem"
            transition={{ times: [0, 0.1, 0.9, 1], duration: 0.4 }}
            variants={mainanimation}
        >
            <h2><span>03</span> space launch 101</h2>
            <div className="left-column">
                <div className='buttons'>
                    {prop.map(data => (
                        <button key={data.name} id={data.name} onClick={(e) => changeTechnology(data.name, e)}>{data.key}</button>
                    ))} 
                </div>
                {prop.filter(data => data.name === tech).map(data => (
                    <motion.div className="text" key={data.name}  variants={technologytextanimation} initial={false} animate="animatedt" transition={{ times: [0, 0.1, 0.9, 1], duration: 0.5 }}>
                        <h3>the terminology ...</h3>
                        <h2>
                            { data.name }
                        </h2>
                        <p>
                            { data.description }
                        </p>
                    </motion.div>
                ))} 
            </div>
            <div className="right-column">
                {prop.filter(data => data.name === tech).map(data => (
                    <div className="image" key={data.name}>
                        <motion.img 
                        src={data.images[orientation]}
                        alt={data.name} 
                        variants={technologyimganimation} 
                        initial={false}
                        animate="animated"
                        transition={{ times: [0, 0.1, 0.9, 1], duration: 0.5 }}
                        />
                    </div>
                ))} 
            </div>
            
            
        </motion.section>
    )
}

export default Technology