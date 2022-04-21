import React from 'react'

const Pricing = () => {
  return (
    <div className="wrapper">
    
    <div className="table premium">
      <div className="ribbon"><span>Recommend</span></div>
      <div className="price-section">
        <div className="price-area">
          <div className="inner-area">
          </div>
        </div>
      </div>
      <div className="package-name"></div>
      <ul className="features">
        <li>
          <span className="list-name">Five Percent of Tax Will BE Applied</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        <li>
          <span className="list-name">Tax is the Amount Charged by Team</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        <li>
          <span className="list-name">Email to Apply as Tour Agent</span>
          <span className="icon check"><i className="fas fa-check"></i></span>
        </li>
        
      </ul>
     
    </div>
   
  </div>
  )
}

export default Pricing
