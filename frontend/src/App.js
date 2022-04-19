import {BrowserRouter as Router,Route} from 'react-router-dom'
import { useEffect,useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetail'
import Cart from './components/cart/Cart'
import Login from './components/user/Login'
import Register from './components/user/Register'
import {loadUser} from './actions/userActions'
import ProtectedRoute from './components/route/ProtectedRoute'
import Profile from './components/user/Profile'
import UpdateProfile from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import ForgotPassword from './components/user/ForgotPassword'
import NewPassword from './components/user/NewPassword'
import Personal from './components/cart/Personal'
import ConfirmOrder from './components/cart/ConfirmOrder'
import Payment from './components/cart/Payment'
import OrderSuccess from './components/cart/OrderSuccess'
import ListOrders from './components/order/ListOrders'
import OrderDetails from './components/order/OrderDetails'
import Dashboard from './components/tourAgent/Dashboard'
import ProductsList from './components/tourAgent/ProductsList'
import NewProduct from './components/tourAgent/NewProduct'
import UpdateProduct from './components/tourAgent/UpdateProduct'
import OrdersList from './components/tourAgent/OrdersList'
import ProcessOrder from './components/tourAgent/ProcessOrder'
import UsersList from './components/tourAgent/UsersList'
import UpdateUser from './components/tourAgent/UpdateUser'
import Kaghan from './components/cities/Kaghan'
import Gilgit from './components/cities/Gilgit'
import Murree from './components/cities/Murree'
import store from './store'
import axios from 'axios' 
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
function App() {

  const [stripeApiKey,setStripeApiKey]=useState('');
  useEffect(()=>{
    store.dispatch(loadUser())

    async function getStripeApiKey(){
      const {data} = await axios.get('/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }

    getStripeApiKey();
  },[])
  return (
    <Router>
    <div className="App">
     <Header/>
     <Route path="/" component={Home} exact />
     <div className="container container-fluid">
    
    <Route path="/search/:keyword" component={Home}  />
    <Route path="/product/:id" component={ProductDetails} exact />
    <Route path="/cart" component={Cart}  />
    <ProtectedRoute path="/personal" component={Personal}  />
    <ProtectedRoute path="/order/confirm" component={ConfirmOrder}  />
    <ProtectedRoute path="/success" component={OrderSuccess}  />
    {stripeApiKey &&
    <Elements stripe={loadStripe(stripeApiKey)}>
      <ProtectedRoute path="/payment" component={Payment} />
      </Elements>}
    <Route path="/login" component={Login}  />
    <Route path="/register" component={Register}  />
    <Route path="/password/forgot" component={ForgotPassword}  />
    <Route path="/password/reset/:token" component={NewPassword}  />
    
    <ProtectedRoute path="/me" component={Profile} exact  />
    <ProtectedRoute path="/me/update" component={UpdateProfile} exact  />
    <ProtectedRoute path="/password/update" component={UpdatePassword} exact  />
    <ProtectedRoute path="/orders/me" component={ListOrders} exact  />
    <ProtectedRoute path="/order/:id" component={OrderDetails} exact  />
   
    </div>
    <ProtectedRoute path="/dashboard" isNotCustomer={true} component={Dashboard} exact  />
    <ProtectedRoute path="/tourAgent/products" isNotCustomer={true} component={ProductsList} exact  />
    <ProtectedRoute path="/tourAgent/product/new" isNotCustomer={true} component={NewProduct} exact  /> 
    <ProtectedRoute path="/tourAgent/products/:id" isNotCustomer={true} component={UpdateProduct} exact  />
    <ProtectedRoute path="/tourAgent/orders" isNotCustomer={true} component={OrdersList} exact  />  
    <ProtectedRoute path="/tourAgent/order/:id" isNotCustomer={true} component={ProcessOrder} exact  />

    <ProtectedRoute path="/admin/users" isNotCustomer={true} component={UsersList} exact  />
    <ProtectedRoute path="/admin/user/:id" isNotCustomer={true} component={UpdateUser} exact  />

    <Route path="/cities/gilgit" component={Gilgit}  />
    <Route path="/cities/kaghan" component={Kaghan}  />
    <Route path="/cities/murree" component={Murree}  />
    
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
