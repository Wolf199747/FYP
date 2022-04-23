import React,{Fragment,useState}from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { savePersonalInfo} from '../../actions/cartActions'

import { Link } from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';

import "react-datepicker/dist/react-datepicker.css";

const Personal = ({history}) => {
    const {personalInfo} = useSelector(state=>state.cart)
    const {cartItems} = useSelector(state=>state.cart)
    const [address,setAddress]=useState(personalInfo.address)
    const [city,setCity] = useState(personalInfo.city)
    const [phoneNo,setPhoneNo]=useState(personalInfo.phoneNo)
    const [postalCode,setPostalCode] = useState(personalInfo.postalCode)
    const [packageDate,setPackageDate]= useState(new Date());
    const [noOfAdults,setNoOfAdults]= useState(0);
    const [noOfKids,setNoOfKids]= useState(0);

    const dispatch=useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault()

        dispatch(savePersonalInfo({address,city,phoneNo,postalCode,packageDate,noOfAdults,noOfKids}))

        history.push('/order/confirm')
    }
    
  return (
    <Fragment>
        <CheckoutSteps personal />
      <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-4">Personal Info</h1>
                        <div className="form-group">
                            <label htmlFor="address_field">Address</label>
                            <input
                                type="text"
                                id="address_field"
                                className="form-control"
                                value={address}
                                onChange={(e)=>{setAddress(e.target.value)}}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="city_field">City</label>
                            <input
                                type="text"
                                id="city_field"
                                className="form-control"
                                value={city}
                                onChange={(e)=>{setCity(e.target.value)}}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone_field">Phone No</label>
                            <input
                                type="phone"
                                id="phone_field"
                                className="form-control"
                                value={phoneNo}
                                onChange={(e)=>{setPhoneNo(e.target.value)}}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="postal_code_field">Postal Code</label>
                            <input
                                type="number"
                                id="postal_code_field"
                                className="form-control"
                                value={postalCode}
                                onChange={(e)=>{setPostalCode(e.target.value)}}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="package_date_field">Package Date</label>
                            <input
                                type="date"
                                id="date_field"
                                className="form-control"
                                value={packageDate}
                                onChange={(e)=>{setPackageDate(e.target.value)}}
                                required
                            />
                        </div>
                        {cartItems.map(item=>(
                        <div className="form-group">
                            <label htmlFor="no_of_adults_field">Number of Adults (Max Capacity  For  <span id="itemName"><Link to={`/product/${item.product}`}>{item.name}</Link></span> is {item.noOfPersons})</label>
                            <input
                                type="number"
                                id="no_of_adults_field"
                                className="form-control"
                                value={noOfAdults}
                                onChange={(e)=>{setNoOfAdults(e.target.value)}}
                                required
                            />
                        </div>))}
                        {cartItems.map(item=>(<div className="form-group">
                            <label htmlFor="no_of_kids_field">Number of Kids (Max Capacity  For  <span id="itemName"><Link to={`/product/${item.product}`}>{item.name}</Link></span> is {item.noOfPersons})</label>
                            <input
                                type="number"
                                id="no_of_kids_field"
                                className="form-control"
                                value={noOfKids}
                                onChange={(e)=>{setNoOfKids(e.target.value)}}
                                required
                            />
                        </div>))}
                        
                        <button
                            id="shipping_btn"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            CONTINUE
                            </button>
                    </form>
                </div>
            </div>
    </Fragment>
  )
}

export default Personal
