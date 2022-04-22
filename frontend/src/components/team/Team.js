import React from 'react'
import { motion } from 'framer-motion'
const Team = () => {
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5}}>
    <div className="container team">
    
    <div className="profiles">
      <div className="profile">
        <img src="../../images/hadi.jpg" className="profile-img"/>

        <h3 className="user-name">Muhammad Hadi</h3>
        <h5>Team Member</h5>
        <p>3878-FBAS/BSSE/F18-A</p>
      </div>
      <div className="profile">
        <img src="../../images/ahsan.jpg" className="profile-img"/>

        <h3 className="user-name">Muhammad Ahsan</h3>
        <h5>Team Member</h5>
        <p>3832-FBAS/BSSE/F18-A</p> </div>
      
    </div>
  </div>
  </motion.div>
  )
}

export default Team
