import React from 'react'
import {Link} from 'react-router-dom'

const CheckoutSteps = ({personal,confirmOrder,payment}) => {
  return (
    <div className="checkout-progress d-flex justify-content-center mt-5">
    {personal?<Link to="/personal" className="float-right">
        <div className="triangle2-active"></div>
        <div className="step active-step">Personal Info</div>
        <div className="triangle-active"></div>
    </Link> : <Link to="#!" disabled>
    <div className="triangle2-incomplete"></div>
        <div className="step incomplete">Personal Info</div>
        <div className="triangle-incomplete"></div>
    </Link>
    
}
{confirmOrder?<Link to="/order/confirm" className="float-right">
        <div className="triangle2-active"></div>
        <div className="step active-step">Confirm Package</div>
        <div className="triangle-active"></div>
    </Link> : <Link to="#!" disabled>
    <div className="triangle2-incomplete"></div>
        <div className="step incomplete">Confirm Package</div>
        <div className="triangle-incomplete"></div>
    </Link>
    
}
{payment?<Link to="/payment" className="float-right">
        <div className="triangle2-active"></div>
        <div className="step active-step">Payment</div>
        <div className="triangle-active"></div>
    </Link> : <Link to="#!" disabled>
    <div className="triangle2-incomplete"></div>
        <div className="step incomplete">Payment</div>
        <div className="triangle-incomplete"></div>
    </Link>
    
}
  </div>
  )
}

export default CheckoutSteps
