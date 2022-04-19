import React,{Fragment,useEffect}from 'react'

import {Link} from 'react-router-dom'
import {MDBDataTable} from 'mdbreact'
import { useDispatch,useSelector } from 'react-redux'
import Loader from '../layout/Loader'
import { useAlert } from 'react-alert'
import Sidebar from './Sidebar'
import {allUsers, clearErrors, deleteUser} from '../../actions/userActions'
import { DELETE_USER_RESET } from '../../constants/userConstants'

const UsersList = ({history}) => {

    const alert = useAlert();
    const dispatch = useDispatch();

    const {loading,error,users} = useSelector(state=>state.allUsers);
    const {isDeleted} = useSelector(state=>state.user)
    useEffect(()=>{

        dispatch(allUsers());
        if(isDeleted){
            alert.success('User Deleted' );
            history.push('/admin/users');
            dispatch({type:DELETE_USER_RESET})
        }
        if(error){
            alert.error(error);
            dispatch(clearErrors())
        }
        
      
    },[dispatch,alert,error,isDeleted,history])

    const deleteUserHandler = (id) =>{

        dispatch(deleteUser(id))
    }

    const setUsers=()=>{
        const data = {
            columns:[
                {
                    label:'User ID',
                    field:'id',
                    sort:'asc'
                },
                {
                    label:'Name',
                    field:'name',
                    sort:'asc'
                },
                {
                    label:'Email',
                    field:'email',
                    sort:'asc'
                },
                {
                    label:'Role',
                    field:'role',
                    sort:'asc'
                },
                {
                    label:'Actions',
                    field:'actions',
                }   
            ],
            rows:[]
        }
        
        users.forEach(user => {
            
            data.rows.push({
                
                id: user._id,
                name:user.name,
                email:user.email,
                role:user.role,
               
                actions: <Fragment>
                <Link to={`/admin/user/${user._id}`} className="btn btn-primary py-1 px-2"> Edit </Link>
                <button className="btn btn-danger py-1 px-2 ml-2" onClick={()=>deleteUserHandler(user._id)} >Delete</button>
                </Fragment>
            })
        });
        return data;
    }
  return (
    <Fragment>
      <div className="row">
          <div className="col-12 col-md-2">
              <Sidebar />
          </div>
          
          <div className="col-12 col-md-10">
              <Fragment>
                  <h1 className="my-5">All Users</h1>
                  
                  {loading?<Loader/>:(
                      
                        <MDBDataTable
                                
                        data={setUsers()}
                        className="px-3"
                        bordered
                        striped
                        hover

                        />
                  )}
              </Fragment>
          </div>
      </div>
    </Fragment>
  )
}

export default UsersList
