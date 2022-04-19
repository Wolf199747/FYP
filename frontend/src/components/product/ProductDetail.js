import React,{Fragment,useEffect, useState} from 'react'
import { useAlert } from 'react-alert'
import { useDispatch,useSelector } from 'react-redux'
import { getProductDetails,clearErrors} from '../../actions/productActions'
import Loader from '../layout/Loader'
import {addItemToCart} from '../../actions/cartActions'

const ProductDetails = ({match}) => {

    const dispatch=useDispatch();
    const alert = useAlert();
    const [quantity,setQuantity]=   useState(1)
    const {loading,error,product}=useSelector(state=>state.productDetails)
    const {user} = useSelector(state=>state.auth)
    useEffect(()=>{
        dispatch(getProductDetails(match.params.id))

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
    },[dispatch,alert,error,match.params.id])

    const onChange=e=>{
        setQuantity(e.target.value)
        if(e.target.value>product.stock){
            return alert.success(`Max Stock is of ${product.stock}`)
        }
    }
    const increaseQuantity = () =>{
        const count = document.querySelector('.count')

        if(count.valueAsNumber>= product.stock){
            return alert.success(`Max stock is of ${product.stock}`)
        }

        const qty=count.valueAsNumber +1;
        setQuantity(qty)
    }

    const decreaseQuantity = () =>{
        const count = document.querySelector('.count')

        if(count.valueAsNumber<= 1) return;

        const qty=count.valueAsNumber -1;
        setQuantity(qty)
    }
    const addToCart = () =>{
        dispatch(addItemToCart(match.params.id,quantity));
        alert.success("Package Added to Cart")
    }
  return (
      <Fragment>
    {loading?<Loader/>:(
<Fragment>
<div className="row f-flex justify-content-around">
    <div className="col-12 col-lg-5 img-fluid" id="product_image">
        <img src={product.images} alt={product.title} height="300" width="400" />
    </div>

    <div className="col-12 col-lg-5 mt-5">
        <h3>{product.name}</h3>
        <p id="product_id">Product # {product._id}</p>
 

    
        <hr />

        <p id="product_price">Rs.{product.price}</p>
        <div className="stockCounter d-inline">
            {product.category==='Travel' && (<span className="">Seat(s):  </span>)}
            {product.category==='Tour' && (<span className="">Rooms(s):  </span>)}
            <span className="btn btn-danger minus" onClick={decreaseQuantity}>-</span>
           
            <input type="number" className="form-control count d-inline" value={quantity} onChange={onChange}/>

            <span className="btn btn-success plus" onClick={increaseQuantity}>+</span>
        </div>
       
            <button disabled={product.stock===0 || user && user.role!=="user"?true :false} type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" onClick={addToCart}>Add to Cart</button>
        
        {user && user.role!=="user" &&(
                <h4>Admins and Tour Agents Cannot Order</h4>
        )}
            

        <hr />

        <p>Status: <span id="stock_status" className={product.stock>0?'greenColor':'redColor'}>{product.stock>0?'In Stock':'Out of Stock'}</span></p>

        <hr/>
        <h4 className="mt-2">Category:</h4>
        <p>{product.category}</p>
        <hr/>
        <h4 className="mt-2">location:</h4>
        <p>{product.location}</p>
        <hr/>
        <h4 className="mt-2">Duration:</h4>
        <p>{product.duration}</p>
        <hr/>
        <h4 className="mt-2">Persons Capacity:</h4>
        <p>{product.noOfPersons}</p>
        <hr/>
        <h4 className="mt-2">Description:</h4>
        <p>{product.description}</p>
        <hr/>
        <p id="product_seller mb-3">Sold by: <strong>{product.seller}</strong></p>
        
       

</div>

</div></Fragment>
      )}
    </Fragment>

  )
}

export default ProductDetails
