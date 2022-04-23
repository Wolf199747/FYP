import React,{Fragment,useEffect}from 'react'

import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import {getOrderDetails} from '../../actions/orderActions'
import { motion } from 'framer-motion'
const OrderDetails = ({match}) => {

    
    const dispatch = useDispatch();

    const {loading,order={}}=useSelector(state=>state.orderDetails);
    const {personalInfo,orderItems,paymentInfo,user,totalPrice,orderStatus} = order

    useEffect(()=>{
      dispatch(getOrderDetails(match.params.id))

        
    },[dispatch,match.params.id])
    
    const isPaid = paymentInfo && paymentInfo.status==='succeeded'
    
  return (
    
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5}}>
    <Fragment>
      
      {loading? <Loader/>:(

        <Fragment>
        <div className="row d-flex justify-content-between">
                    <div className="col-12 col-lg-8 mt-5 order-details">

                        <h1 className="my-5">Order # {order._id}</h1>

                        <h4 className="mb-4">Personal Info</h4>
                        <p><b>Name:</b> {user && user.name}</p>
                        <p><b>Phone:</b> {personalInfo && personalInfo.phoneNo}</p>
                        <p className="mb-4"><b>Address: {personalInfo && `${personalInfo.address},${personalInfo.city},${personalInfo.postalCode}` }</b></p>
                        <p><b>Amount:</b> Rs.{totalPrice}</p>
                        
                        <p><b>No OF Adults:</b> {personalInfo && personalInfo.noOfAdults}</p>
                        <p><b>No OF Kids:</b> {personalInfo && personalInfo.noOfKids}</p>
                        <hr />

                        <h4 className="my-4">Payment</h4>
                        <p className={isPaid?"greenColor":"redColor"} ><b>{isPaid?"Paid":"Not Paid"}</b></p>


                        <h4 className="my-4">Order Status:</h4>
                        <p className={order.orderStatus && String(order.orderStatus).includes('Completed') ?"greenColor":"redColor"} ><b>{orderStatus}</b></p>


                        <h4 className="my-4">Order Items:</h4>

                        <hr />
                        <div className="cart-item my-1">
                          {orderItems && orderItems.map(item=>(

                              <div key={item.product} className="row my-5">
                              <div className="col-4 col-lg-2">
                                  <img src={item.image} alt={item.name} height="45" width="65" />
                              </div>

                              <div className="col-5 col-lg-5">
                                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                              </div>


                              <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                                  <p>Rs.{item.price}</p>
                              </div>

                              <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                                  <p>{item.quantity} Piece(s)</p>
                              </div>
                             
                              </div>
                          ))}
                                   
                        </div>
                        <hr />
                        
                    </div>
                </div>
                
           </Fragment>
      )}
    </Fragment>
    </motion.div>
  )
}

export default OrderDetails
