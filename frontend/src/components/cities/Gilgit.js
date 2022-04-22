import React from 'react'
import './Gilgit.css'
import { motion } from 'framer-motion'
const Gilgit = () => {
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
    <p>Gilgit, town in Gilgit-Baltistan, part of the Pakistani-administered sector of the Kashmir region, in the northern Indian subcontinent. It is situated in the Karakoram Range in a narrow valley on the Gilgit River at its confluence with the Hunza River and about 20 miles (32 km) upstream from its confluence with the Indus River. The town was once a Buddhist centre; now, as in earlier days, it serves as a frontier station for local tribal areas. Its economy is mainly agricultural, with wheat, corn (maize), and barley as the main crops. Tourism, notably trekking and mountaineering in the Karakorams, is growing in importance. The main route from Gilgit through the mountains to Mansehra in Khyber Pakhtunkhwa province is the Karakoram Highway (completed in 1978); the town has a small airport. Gilgit is the only town of any size in the region. Pop. (1998 prelim.) 8,200.</p>
    <br></br>
    <h2>Famous Places to visit in Gilgit</h2>
    <ul>
      <li> Shangrilla Resort Kachura Skardu Baltistan</li>
      <li> Baltoro Glacier</li>
      <li> Ngar Valley Gilgit Baltistan</li>  
    </ul>
</div>
    </div>
    </motion.div>
  )
}

export default Gilgit
