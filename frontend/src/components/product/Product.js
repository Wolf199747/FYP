import React from 'react'

import {Link} from 'react-router-dom'

const Product = ({product,col}) => {
  return (
    <div  className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
    <div className="card  rounded">
      <img
        className="card-img-top mx-auto"
        src={product.images}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h5>
        
        <p className="card-text card-price">Rs.{product.price}</p>
        <h6>Category:{product.category}</h6>
        <h6>location:{product.location}</h6>
        <Link to={`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
      </div>
    </div>
  </div>
  )
}

export default Product
