import React,{Fragment,useEffect}from 'react'

import {Link} from 'react-router-dom'
import {MDBDataTable} from 'mdbreact'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import Sidebar from './Sidebar'
import {allOrders,deleteOrder,clearErrors} from '../../actions/orderActions'
import { DELETE_ORDER_RESET } from '../../constants/orderConstants'
const OrdersList = ({history}) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const {loading,error,orders} = useSelector(state=>state.allOrders);
    const {isDeleted} = useSelector(state=>state.order)
    useEffect(()=>{

        dispatch(allOrders());
        if(isDeleted){
            alert.success('Order Deleted' );
            history.push('/tourAgent/orders');
            dispatch({type:DELETE_ORDER_RESET})
        }
        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
        
      
    },[dispatch,alert,error,isDeleted,history])

    const deleteOrderHandler = (id) =>{

        dispatch(deleteOrder(id))
    }

    const setOrders=()=>{
        const data = {
            columns:[
                {
                    label:'Order ID',
                    field:'id',
                    sort:'asc'
                },
                {
                    label:'No of Items',
                    field:'numOfItems',
                    sort:'asc'
                },
                {
                    label:'Amount',
                    field:'amount',
                    sort:'asc'
                },
                {
                    label:'Status',
                    field:'status',
                    sort:'asc'
                },
                {
                    label:'Actions',
                    field:'actions',
                }   
            ],
            rows:[]
        }
        
        orders.forEach(order => {
            
            data.rows.push({
                
                id: <Link to={`/order/${order._id}`} className="  py-1 px-2"> {order._id}</Link>,
                numOfItems:order.orderItems.length,
                amount:`Rs.${order.totalPrice}`,
                status:order.orderStatus && String(order.orderStatus).includes('Completed') ?
                <p style={{color:'green'}}>{order.orderStatus}</p> :
                <p style={{color:'red'}}>{order.orderStatus}</p>,

                actions: <Fragment>
                <Link to={`/tourAgent/order/${order._id}`} className="btn btn-primary py-1 px-2"> View </Link>
                <button className="btn btn-danger py-1 px-2 ml-2"  onClick={()=>deleteOrderHandler(order._id)}>Delete</button>
                </Fragment>
            })
        });
        return data;
    }
  return (
    <Fragment>
      <div className="row">
          <div className="col-12 col-md-2">
              <Sidebar />
          </div>
          
          <div className="col-12 col-md-10">
              <Fragment>
                  <h1 className="my-5">All Bookings</h1>
                  
                  {loading?<Loader/>:(
                      
                        <MDBDataTable
                                
                        data={setOrders()}
                        className="px-3"
                        bordered
                        striped
                        hover

                        />
                  )}
              </Fragment>
          </div>
      </div>
    </Fragment>
  )
}

export default OrdersList
