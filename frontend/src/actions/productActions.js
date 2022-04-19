import axios from 'axios';
import {ALL_PRODUCTS_REQUEST,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_FAIL,CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL,
    TOURAGENT_PRODUCTS_REQUEST,TOURAGENT_PRODUCTS_SUCCESS,TOURAGENT_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,NEW_PRODUCT_SUCCESS,NEW_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,DELETE_PRODUCT_SUCCESS,DELETE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAIL
} from '../constants/productConstants'

export const getProducts = (keyword='',currentPage=1,category,location) => async (dispatch) =>{

    try {
        dispatch({
            type:ALL_PRODUCTS_REQUEST
        })
        
        let link=`/api/v1/products?keyword=${keyword}&page=${currentPage}`;
        if(category){
            link=`/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`
        }
        if(location){
            link=`/api/v1/products?keyword=${keyword}&page=${currentPage}&location=${location}`
        }
        
        const {data} = await axios.get(link);

        if(category){}

        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({

            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
} 

export const newProduct=(productData) => async(dispatch)=>{

    try {

        dispatch({type:NEW_PRODUCT_REQUEST})
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}= await axios.post('/api/v1/tourAgent/product/new',productData,config)

        dispatch({
            
            type:NEW_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        
        dispatch({
            type:NEW_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const deleteProduct=(id) => async(dispatch)=>{

    try {

        dispatch({type:DELETE_PRODUCT_REQUEST})
      
        const {data}= await axios.delete(`/api/v1/tourAgent/products/${id}`)

        dispatch({
            
            type:DELETE_PRODUCT_SUCCESS,
            payload:data.success
        })
        
    } catch (error) {
        
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}
 

export const updateProduct=(id,productData) => async(dispatch)=>{

    try {

        dispatch({type:UPDATE_PRODUCT_REQUEST})
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        }
        const {data}= await axios.put(`/api/v1/tourAgent/products/${id}`,productData,config)

        dispatch({
            
            type:UPDATE_PRODUCT_SUCCESS,
            payload:data.success
        })
        
    } catch (error) {
        
        dispatch({
            type:UPDATE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}
export const getProductDetails = (id) => async (dispatch) =>{

    try {
        dispatch({
            type:PRODUCT_DETAILS_REQUEST
        })
        
        const {data} = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            payload:data.product
        })
    } catch (error) {
        dispatch({

            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
} 

export const getTourAgentProducts = () => async (dispatch) =>{

    try {
        dispatch({
            type:TOURAGENT_PRODUCTS_REQUEST
        })
        
        const {data} = await axios.get(`/api/v1/tourAgent/products`);

        dispatch({
            type:TOURAGENT_PRODUCTS_SUCCESS,
            payload:data.products
        })
    } catch (error) {
        dispatch({

            type:TOURAGENT_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
} 
//clear errors

export const clearErrors = () => async(dispatch)=>{

    dispatch({
        type:CLEAR_ERRORS
    })
}