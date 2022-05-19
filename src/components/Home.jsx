import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  const mainanimation = {
    animatem: { scale: [0.75, 1.05, 1], opacity: [0, 0.25, 0.5, 1] },
  }
  return (
    <motion.section 
      className='home'
      initial={{scale: 0.75, opacity: 0}}
      animate="animatem"
      transition={{ times: [0, 0.1, 0.9, 1], duration: 0.4 }}
      variants={mainanimation}
    >
      <h2>SO, YOU WANT TO TRAVEL TO</h2>
      <h1>SPACE</h1>
      <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
      </p>
      <div className="button">
        <h3>Explore</h3>
      </div>
    </motion.section>
  )
}

export default Home