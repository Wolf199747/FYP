import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <Fragment>
          <footer className="footer">
          <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">Team Members</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">Pricing Policy for Agents</a></li>
  	 				
  	 			</ul>
  	 		</div>
  	 	
  	 	
  	 	</div>
  	 </div>
      <p className="text-center  mt-5">
        Tourism&Travelpk - 2022, All Rights Reserved
      </p>
    </footer>
    </Fragment>
  )
}

export default Footer
