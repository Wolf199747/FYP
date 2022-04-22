import React,{Fragment} from 'react'
import Loader from '../layout/Loader'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
const Profile = () => {

    const {user,loading} = useSelector(state=>state.auth)
  return (
      
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}>
    <Fragment>
        <h4 className="TAh4" style={{textAlign:'center'}}>Email us at <a href="mailto:hsh18922@gmail.com"><span id="TAEmail">hsh18922@gmail.com</span></a> to apply as Tour Agent </h4>
        
          {loading?<Loader />:(
              <Fragment>
                  
                  <h2 className="mt-5 ml-5">My Profile</h2>
        <div className="row justify-content-around mt-5 user-info">
            
            <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                </figure>
                <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Edit Profile
                </Link>
            </div>
     
            <div className="col-12 col-md-5">
            
                 <h4>Full Name</h4>
                 <p>{user.name}</p>
     
                 <h4>Email Address</h4>
                 <p>{user.email}</p>
                 <h4>Joined On</h4>
                 <p>{String(user.createdAt).substring(0,10)}</p>
                 <h4>Role</h4>
                 <p>{user.role.toUpperCase()}</p>
                {user.role !=='admin' && user.role !=='tourAgent' &&(
                     <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                     My Orders
                 </Link>
                ) }
                

                <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                    Change Password
                </Link>
                </div>
             </div>
                   </Fragment>
          )}
    </Fragment>
    </motion.div>
  )
}

export default Profile
