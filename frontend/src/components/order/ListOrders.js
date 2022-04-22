import React,{Fragment,useEffect}from 'react'

import {Link} from 'react-router-dom'
import {MDBDataTable} from 'mdbreact'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import {myOrders,clearErrors} from '../../actions/orderActions'
import { motion } from 'framer-motion'

const ListOrders = () => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const {loading,error,orders} = useSelector(state=>state.myOrders);

    useEffect(()=>{

        dispatch(myOrders());

        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
    },[dispatch,alert,error])

    const setOrders=()=>{
        const data = {
            columns:[
                {
                    label:'Order ID',
                    field:'id',
                    sort:'asc'
                },
                {
                    label:'Number of Items',
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
                    sort:'asc'
                }   
            ],
            rows:[]
        }

        orders.forEach(order => {
            data.rows.push({
                id:order._id,
                numOfItems:order.orderItems.length,
                amount:`Rs.${order.totalPrice}`,
                status:order.orderStatus && String(order.orderStatus).includes('Completed') ?
                <p style={{color:'green'}}>{order.orderStatus}</p> :
                <p style={{color:'red'}}>{order.orderStatus}</p>,

                actions:
                <Link to={`/order/${order._id}`} className="btn btn-primary"> view </Link>
            })
        });
        return data;
    }
  return (
      
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5}}>
    <Fragment>
      <h1 className="mt-5">My Orders</h1>
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
    </motion.div>
  )
}

export default ListOrders
