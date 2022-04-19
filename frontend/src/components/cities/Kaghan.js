import React from 'react'

import './Kaghan.css'
const Kaghan = () => {
  return (
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
    <p>Naran and Kaghan are tourist destinations located in the Mansehra district of Khyber Pakhtunkhwa province of Pakistan. The phrase “Naran Kaghan” is actually a combination of two words, originally derived from Naran Valley and Kaghan Valley that are adjacent to each other. Geographically, Naran is a tourist town situated inside the greater Kaghan Valley at an altitude of 2,409 meters (7,904 ft). It is located at a distance of approximately 23 kilometers (14.3 miles) further towards the north from the mainland of Kaghan Valley. Kaghan itself is located 99 km (61.6 miles) from Mansehra city at an elevation ranging between 650m (2,134 ft) and 4,170 m (13,690 ft).</p>
    <br></br>
    <h2>Famous Places to visit in Kaghan</h2>
    <ul>
      <li> Shogran</li>
      <li> Kiwai</li>
      <li> Makra Peak</li>  
    </ul>
</div>
    </div>
    
  )
}

export default Kaghan
