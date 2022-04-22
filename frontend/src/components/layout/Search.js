import React,{useState}from 'react'

import { motion } from 'framer-motion';
const Search = ({history}) => {

    const [keyword,setKeyword]=useState('');
    const searchHandler = (e)=>{

        e.preventDefault()

        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        } else{
            history.push('/')
        }
    }
  return (
    
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5}}>
      <form onSubmit={searchHandler}>

<div className="input-group">
          <input
            type="text"
            id="search_field"
            className="form-control"
            placeholder="Search Packages"
            onChange = {(e)=>setKeyword(e.target.value)}
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
      </motion.div>
  )
}

export default Search
