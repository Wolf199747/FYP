import React,{Fragment} from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({isNotCustomer,component:Component,...rest}) => {
 
    const {isAuthenticated,loading,user} = useSelector(state=>state.auth)
    return (
    <Fragment>
      {loading===false &&(
          <Route
          {...rest}
          render ={props=>{
              if(isAuthenticated===false){
                  return <Redirect to='/login' />
              }
              if(isNotCustomer===true && user.role!=='admin' && user.role!=='tourAgent'){
                return <Redirect to='/' />
              }
              return <Component {...props} />
          }}
          />
      )}
    </Fragment>
  )
}

export default ProtectedRoute
