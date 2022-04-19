import React, { Fragment } from 'react'

import {Route,Link}  from 'react-router-dom'

import {useDispatch,useSelector} from 'react-redux'
import {useAlert} from 'react-alert'
import { logout } from '../../actions/userActions'
import Search from './Search'
import '../../App.css'


const Header = () => {
  const alert=useAlert();
  const dispatch= useDispatch();


  const {user,loading} =useSelector (state=>state.auth)
  const {cartItems} = useSelector(state=>state.cart)

  const logoutHandler = () =>{
    
    dispatch(logout());
    alert.success('Logged Out')
  }
  return (
    <Fragment>
      <head>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
<script src="https://kit.fontawesome.com/161d9a8014.js" crossorigin="anonymous"></script>
      </head>
      <div>
        <p id="topParagraph">Enjoy Best Tourism and Travel Packages Under One Roof</p>
      </div>
      <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
        <Link to="/">
          <h4 className='navbarText'>Tourism&Travelpk<span><img className="navbarlogopng" src="/images/pak.png"></img></span></h4>
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Route render={({history})=> <Search history={history} /> } />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link id='cartTotal' to="/cart" style={{textDecoration:'none'}}> 
      <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">{cartItems.length}</span>
        </Link>
        {user?(
          <div className="ml-4 dropdown d-inline">
            <button to="#!" className="btn dropdown-toggle text-white  " type="button" 
            id="dropDownMenuButton"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              <figure className="avatar avatar-nav">
                        <img 
                        src={user.avatar && user.avatar.url}
                        alt={user && user.name}
                        className="rounded-circle" />
              </figure>
              <span  className="ddnam" style={{color:'#fff'}} >{user && user.name}</span>
     
            </button>
            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">
              {user && user.role !=='admin'&& user.role !=='tourAgent'?(
                <Link className="dropdown-item" to="/orders/me">Orders</Link>
              ):(
                <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
              )}
                <Link className="dropdown-item" to="/me">Profile</Link>
            <Link className="dropdown-item text-danger" to="/" onClick={logoutHandler}>
              Logout
            </Link>

            </div>
             </div>
        ):!loading &&  <Link to="/login" className="btn ml-4" id="login_btn"><span><img id='loginpng' src="images/login.png"></img></span>Login</Link> }
       

        
      </div>
    </nav>
    
    </Fragment>
  )
}

export default Header
