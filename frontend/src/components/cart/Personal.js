import React,{Fragment,useState}from 'react'

import { useDispatch,useSelector } from 'react-redux'

import { savePersonalInfo} from '../../actions/cartActions'


import CheckoutSteps from './CheckoutSteps';

import "react-datepicker/dist/react-datepicker.css";

const Personal = ({history}) => {
    const {personalInfo} = useSelector(state=>state.cart)

    const [address,setAddress]=useState(personalInfo.address)
    const [city,setCity] = useState(personalInfo.city)
    const [phoneNo,setPhoneNo]=useState(personalInfo.phoneNo)
    const [postalCode,setPostalCode] = useState(personalInfo.postalCode)
    const [packageDate,setPackageDate]= useState(new Date());

    const dispatch=useDispatch();

    const submitHandler = (e) =>{
        e.preventDefault()

        dispatch(savePersonalInfo({address,city,phoneNo,postalCode,packageDate}))

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
                                id="postal_code_field"
                                className="form-control"
                                value={packageDate}
                                onChange={(e)=>{setPackageDate(e.target.value)}}
                                required
                            />
                        </div>

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
