import React,{Fragment,useState,useEffect}from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import Sidebar from './Sidebar'
import {newProduct,clearErrors} from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
const NewProduct = ({history}) => {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [stock,setStock] = useState('');
    const [seller,setSeller] = useState('');
    const [images,setImages] = useState([]);
    const [imagesPreview,setImagesPreview] = useState([]);
    const [location,setLocation]=useState('');
    const [noOfPersons,setNoOfPersons]=useState('');
    const [duration,setDuration]=useState('');

    const categories =[
        'Tour',
        'Travel'
 ]

 const locations=[
    'Swat',
    'Islamabad',
    'Murree',
    'Gilgit',
    'Lahore',
    'Kaghan',
    'Naran',
    'Kashmir'
  ]

  const alert = useAlert();
    const dispatch = useDispatch();

    const {loading,error,success} = useSelector(state=>state.newProduct);
    

    useEffect(()=>{
        if(success){
            history.push('/tourAgent/products');
            alert.success('Package Created Successfuly');
            dispatch({type:NEW_PRODUCT_RESET })
        }
        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
        
    },[dispatch,alert,error,success,history])

    const submitHandler=(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.set('name',name);
        formData.set('price',price);
        formData.set('description',description);
        formData.set('category',category);
        formData.set('stock',stock);
        formData.set('seller',seller);
        formData.set('images',images);
        formData.set('imagesPreview',imagesPreview);
        formData.set('location',location);
        formData.set('noOfPersons',noOfPersons);
        formData.set('duration',duration);

        dispatch(newProduct(formData))
    }

  const  onChange = e =>{
      
        const files=Array.from(e.target.files)

        setImagesPreview([]);
        setImages([]);

        files.forEach(file=>{

            const reader= new FileReader();
             
            reader.onload=()=>{
                if(reader.readyState===2){
                    setImagesPreview(oldArray=>[...oldArray,reader.result])
                    setImages(oldArray=>[...oldArray,reader.result])
                }
            }
            reader.readAsDataURL(file)
      
        })
         
    }

  return (
    <Fragment>
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>
        
        <div className="col-12 col-md-10">
            <Fragment>
            <div className="wrapper my-5"> 
        <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
            <h1 className="mb-4">New Package</h1>

            <div className="form-group">
              <label htmlFor="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>

            <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  value={price}
                  onChange={(e)=>setPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description_field">Description</label>
                <textarea className="form-control" id="description_field" rows="8" 
                value={description}
                onChange={(e)=>setDescription(e.target.value)} ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Category</label>
                <select className="form-control" id="category_field" value={category} onChange={(e)=>setCategory(e.target.value)}>
                    {categories.map(category =>(
                          <option key={category} value={category}>{category}</option>
                    ))}
                  
                    
                  </select>
              </div>
              <div className="form-group">
                <label htmlFor="category_field">Location</label>
                <select className="form-control" id="category_field" value={location} onChange={(e)=>setLocation(e.target.value)}>
                    {locations.map(location =>(
                          <option key={location} value={location}>{location}</option>
                    ))}
                  
                    
                  </select>
              </div>
              <div className="form-group">
                <label htmlFor="stock_field">Stock</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  value={stock}
                  onChange={(e)=>setStock(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="seller_field">Seller Name</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={seller}
                  onChange={(e)=>setSeller(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="seller_field">Persons Capacity</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={noOfPersons}
                  onChange={(e)=>setNoOfPersons(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="seller_field">Duration</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value={duration}
                  onChange={(e)=>setDuration(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Image</label>
                
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            className='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                            multiple
                        />
                        <label className='custom-file-label' htmlFor='customFile'>
                            Choose Images
                        </label>
                    </div>

                    {imagesPreview.map(img =>(
                       <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                    ))}
            </div>

  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading?true:false}
            >
              CREATE
            </button>

          </form>
    </div>
                
               
            </Fragment>
        </div>
    </div>
  </Fragment>
  )
}

export default NewProduct
