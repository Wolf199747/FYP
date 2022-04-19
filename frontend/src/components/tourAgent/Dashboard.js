import React,{Fragment,useEffect} from 'react'

import {Link} from 'react-router-dom'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'
import { useDispatch,useSelector } from 'react-redux'
import {getTourAgentProducts} from '../../actions/productActions'
import {allOrders} from '../../actions/orderActions'
import { allUsers } from '../../actions/userActions'
const Dashboard = () => {
    const dispatch= useDispatch();

    const {products} =useSelector(state =>state.products)
    const {users} =useSelector(state =>state.allUsers)
    const {user} = useSelector(state=>state.auth)
    const {orders,totalAmount,loading} = useSelector(state=>state.allOrders)
    let outOfStock = 0;
    products.forEach(product=>{
        if(product.stock===0){
            outOfStock +=1;
        }
    })
    useEffect(()=>{
        dispatch(getTourAgentProducts())
        dispatch(allOrders())
        dispatch(allUsers())
    },[dispatch,])
  return (
    <Fragment>
      <div className="row">
          <div className="col-12 col-md-2">

              <Sidebar/>
              
          </div>
 

          
          <div className="col-12 col-md-10  ">
              <br></br>
          <h1 className='adminDash'>Hello {user.name} ({user.role}) </h1>
          
                    <h1 className="my-4">Dashboard</h1>
                    
                    {loading?<Loader/>:(
                        <Fragment>
                            <div className="row pr-4">
                            {user.role !=='admin' &&( <div className="col-xl-12 col-sm-12 mb-3">
                                    <div className="card bg-success text-white h-100">
                                    
                                        <div className="card-body">
                                        <div className="text-center card-font-size">Total Amount<br /> <b>Rs. {totalAmount}</b>
                                        </div>
                                        
                                    </div>
                                  
                                        
                                    </div>
                                </div> )}
                                
                            </div>

                            <div className="row pr-4">
                            {user.role==='tourAgent' &&(
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-danger h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Packages<br /> <b>{products && products.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/tourAgent/products">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            )}
                             {user.role==='tourAgent' &&(
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-info h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Orders<br /> <b>{orders && orders.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/tourAgent/orders">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                )}
                                {user.role==='admin' &&(
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-info o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Users<br /> <b>{users && users.length}</b></div>
                                        </div>
                                        <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                                            <span className="float-left">View Details</span>
                                            <span className="float-right">
                                                <i className="fa fa-angle-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                )}
                                    
                                    {user.role==='tourAgent' &&(
                                <div className="col-xl-3 col-sm-6 mb-3">
                                    <div className="card text-white bg-warning o-hidden h-100">
                                        <div className="card-body">
                                            <div className="text-center card-font-size">Out of Stock<br /> <b>{outOfStock}</b></div>
                                        </div>
                                    </div>
                                </div>
                                    )}
                            </div>
                        </Fragment>
                    )}
                           
                </div>
      </div>
    </Fragment>
  )
}

export default Dashboard
