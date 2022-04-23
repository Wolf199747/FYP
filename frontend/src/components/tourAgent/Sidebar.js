import React from 'react'

import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux'
const Sidebar = () => {

    const {user} = useSelector(state=>state.auth)
  return (
    <div className="sidebar-wrapper">
    <nav id="sidebar">
        <ul className="list-unstyled components">
        <li>
            <Link to="/dashboard"><i className="fa fa-tachometer"></i> Dashboard</Link>
        </li>
        {user.role==='tourAgent' &&(
        <li>
            <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                className="fa   fa-product-hunt"></i> Packages</a>
            <ul className="collapse list-unstyled" id="productSubmenu">
                <li>
                <Link to="/tourAgent/products"><i className="fa fa-clipboard"></i> All</Link>
                </li>

                <li>
                <Link to="/tourAgent/product/new"><i className="fa fa-plus"></i> Create</Link>
                </li>
            </ul>
        </li>
        )}
        {user.role==='tourAgent' &&(
        <li>
            <Link to="/tourAgent/orders"><i className="fa fa-shopping-basket"></i> Bookings</Link>
        </li>
         )}
        {user.role==='admin' &&(
            <li>
            <Link to="/admin/users"><i className="fa fa-users"></i> Users</Link>
            </li>
        )}
       

    </ul>
    </nav>
</div>
  )
}

export default Sidebar
