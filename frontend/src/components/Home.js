import React, { Fragment,useState,useEffect } from 'react'
import Pagination from 'react-js-pagination'
import Product from './product/Product'
import {useDispatch,useSelector} from 'react-redux'
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions'
import { motion } from 'framer-motion'
import Loader from './layout/Loader';
import {Link} from 'react-router-dom'

const Home = ({match}) => {
  const [currentPage,setCurrentPage]=useState(1);
  const [category,setCategory]=useState('');
  const [location,setLocations]=useState('');

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

    const{loading,products,error,productCount,resPerPage,filteredProductsCount}= useSelector(state=>state.products)
    const keyword=match.params.keyword
    useEffect(()=>{
      if(error){
        return   alert.error(error)
     }
        dispatch(getProducts(keyword,currentPage,category,location));
        
        
    },[dispatch,alert,error,keyword,currentPage,category,location])
    function setCurrentPageNo(pageNumber){
      setCurrentPage(pageNumber)
    }

    let count =productCount;
    if(keyword){
      count = filteredProductsCount
    }
  return (
    
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5}}>
     <Fragment>
       {currentPage===1 && !keyword && ( 
       <div className="imgBx">
         <div className="content">
         <h2>Lets Explore<br/><span>Paki<span className='contentSpan'>stan</span></span></h2>
         <p className="contenth2">Its our Country which defines our identity<br/>  and it's what we are grateful for.</p>
       </div>
         
       </div>)}
       {currentPage===1 && !keyword && (
         <section id="features">
           
           <div className="row">
           <div className="feature-box col-lg-4">
           <i className="icon fa fa-comment fa-3x"></i>
             <h3>Easy to Use</h3>
             <p>No ambigious information. Just Search and Buy</p>
           </div>
           <div className="feature-box col-lg-4">
           <i className="icon fa fa-dollar fa-3x"></i>
             <h3>Best Rates</h3>
             <p>Fulfiling your Touring Desires in best Rates</p>
           </div>
           <div className="feature-box col-lg-4">
           <i className="icon fa fa-check fa-3x"></i>
             <h3>Trustable</h3>
             <p>Its the Trust that we admire</p>
           </div>
           </div>
           
         </section>
         
        )}
        {currentPage===1 && !keyword && (
        <h1 id="products_heading">Best Cities</h1>
        )}
 {currentPage===1 && !keyword && (
   
        <section className="container1">
          
          <div className="card">
            <div className="card-image car-1">
              
            </div>
            <h2>Gilgit</h2>
            <Link to="/cities/gilgit" className="cardAnchor">Read More</Link>
          </div>
          <div className="card">
            <div className="card-image car-2"></div>
            <h2>Kaghan</h2>
            
            <Link to="/cities/kaghan" className="cardAnchor">Read More</Link>
          </div>
          <div className="card">
            <div className="card-image car-3"></div>
            <h2>Murree</h2>
            <Link to="/cities/murree" className="cardAnchor">Read More</Link>
          </div>
          
        </section>
          
          )}
       {loading?<Loader/>:(
         
         <Fragment> <h1 id="products_heading">Packages</h1>
    
         <section id="products" className="container mt-5">
        <div className="row">
  
        {keyword ?(
  <Fragment>
    <div className="col-4 cold-md-3 mt-5 mb-5">
      <h4 className='px-5'>Filters</h4>
      <div className="px-5">
          
        <div className='mt-5'>
        <button class="btn ctgbutton" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Categories
  </button>
  <div class="collapse" id="collapseExample">
  <div class=" ">
  <ul className="pl-0">
          {categories.map(category=>(
            
            <li
            style={{cursor:'pointer',
                listStyleType:'none'}}
                key={category}
                onClick={()=>setCategory(category)}>
                  {category}
                </li>
          ))}
          </ul></div>
</div>
         
        </div>
        <div className='mt-5'>
        <button class="btn ctgbutton" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
    Location
  </button>
  <div class="collapse" id="collapseExample1">
  <div class=" ">
  <ul className="pl-0">
          {locations.map(location=>(
            
            <li
            style={{cursor:'pointer',
                listStyleType:'none'}}
                key={category}
                onClick={()=>setLocations(location)}>
                  {location}
                </li>
          ))}
          </ul></div>
</div>
         
        </div>
        
      </div>
    </div>
    <div className="col-6 col-md-5">
      <div className="row">
        {products && products.map(product =>(
            <Product key={product._id} product={product} col={8}/>
           ))}
      </div>
    </div>
  </Fragment>
        ):(
          products && products.map(product =>(
            <Product key={product._id} product={product} col={3 } />
           ))
        )}
          
          
        </div>
      </section></Fragment>
       )}
      {resPerPage<=count && (
        <div className="d-flex justify-content-center mt-5">
        
        <Pagination
        activePage={currentPage}
        itemsCountPerPage={resPerPage}
        totalItemsCount = {productCount}
        onChange={setCurrentPageNo}
        nextPageText={'>'}
        prevPageText={'<'}
        firstPageText={'First'}
        lastPageText={'Last'}
        itemClass="page-item"
        linkClass="page-link"
        />
        </div>
      )}
      
    </Fragment>
      </motion.div>
  )
}

export default Home
