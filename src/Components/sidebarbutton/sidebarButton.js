import React from 'react'
import { Link ,useLocation} from 'react-router-dom'

import './sidebarButton.css'
function sidebarButton(props) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location=useLocation()
 
  return (
    <Link to={props.to} >
    <div className={`btn-body ${location.pathname === props.to ? 'active' : ''}`}>
      {props.icon}
   <p  className='btn-title' >{props.title}</p>   
    </div>
    </Link>
    
  )
}

export default sidebarButton
