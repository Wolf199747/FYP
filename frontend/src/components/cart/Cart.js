import React,{Fragment}from 'react'

import {Link} from 'react-router-dom'

import { useDispatch,useSelector } from 'react-redux'

import { useAlert } from 'react-alert'
import { addItemToCart,removeItemFromCart } from '../../actions/cartActions'

const Cart = ({history}) => {
    const dispatch=useDispatch();
    const alert=useAlert();
    const{cartItems}= useSelector(state=>state.cart)

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id))

        return alert.success('Item Removed')
    }
    const increaseQuantity = (id,quantity,stock) =>{
        const newQty = quantity + 1;

        if(newQty> stock){
            return alert.success(`Max stock is of ${stock}`)
        }

        dispatch(addItemToCart(id,newQty))
    }

    const decreaseQuantity = (id,quantity) =>{
        const newQty = quantity - 1;

        if(newQty< 1){
            return;
        }

        dispatch(addItemToCart(id,newQty))
    }
  
    const checkoutHandler=()=>{
        history.push('/login?redirect=personal')
    }
  
  return (
    <Fragment>
      {cartItems.length===0? <h2 className="mt-5 cartisEmpty">Cart is Empty!</h2> :(
          <Fragment>
              <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
                {cartItems.map(item =>(

                    <Fragment>
                        <hr/> 
                        <div className="cart-item" key={item.product}>
                    <div className="row">
                        <div className="col-4 col-lg-3">
                            <img src={item.image} alt={item.name} height="90" width="115"/>
                        </div>

                        <div className="col-5 col-lg-3">
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </div>


                        <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                            <p id="card_item_price">{item.price}</p>
                        </div>
                        
                        <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={()=>decreaseQuantity(item.product ,item.quantity)}>-</span>
                                <input type="number" className="form-control count d-inline" value={item.quantity}    />

								<span className="btn btn-primary plus" onClick={()=>increaseQuantity(item.product ,item.quantity,item.stock)}>+</span>
                            </div>
                        </div>

                        <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                            <i id="delete_cart_item" onClick={()=>removeCartItemHandler(item.product)} className="fa fa-trash btn btn-danger"></i>
                        </div>
                        <div className="col-5 col-lg-3">
                            <p>Persons Capacity:{item.noOfPersons}</p>
                        </div>
                    </div>
                </div>
                <hr />
                    </Fragment>
                ))}
             
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Package Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc,item)=>(acc+Number(item.quantity)),0)} (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">Rs.{cartItems.reduce((acc,item)=>acc+item.quantity*item.price,0)}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={checkoutHandler}>Check out</button>
                </div>
            </div>
        </div>
          </Fragment>
      )}
    </Fragment>
  )
}

export default Cart
