import React from 'react'

import './Murree.css'

import { motion } from 'framer-motion'
const Murree = () => {
  return (
    
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5}}>
    <div className="carouselDiv">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
        <div className="carousel-item active"></div>
        <div id="target" className="carousel-item"></div>
        <div className="carousel-item"></div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
<div className='descriptionGilgit'>

<br></br>
    <h2>Description</h2>
    <p>Murree, once a charming colonial town nestled in the Himalayan foothills, is now a popular hill station and bustling summer resort in the Galyat region of northern Punjab. Due to being a picturesque and pleasantly scenic places in the country, the last one decade have seen rampant development and today Murree more closely resembles a litter-strewn overcrowded and a thriving tourist resort. However it remains exceedingly popular with Pakistani families for whom its truly a tourist paradise and receives glowing recommendations from this demographic. In summer it is cool - even chilly in the evening - while light rain is common. In winter Murree hides herself under thick blanket of snow. It is the birthplace of explorer Francis Younghusband.</p>
    <br></br>
    <h2>Famous Places to visit in Murree</h2>
    <ul>
      <li> Mall Road</li>
      <li> Bhurban</li>
      <li> Nathiagali</li>  
    </ul>
</div>
    </div>
    </motion.div>
  )
}

export default Murree
