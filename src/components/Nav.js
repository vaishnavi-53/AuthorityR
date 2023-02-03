import React from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return (
      <>
      
      <nav className="navbar navbar-expand-lg navbar-dark  p-4" >
    <h3><b>Road Transport Department</b></h3>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  " id="navSupportedContent">
        <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0 navbar-fixed-top " style={{fontSize: "20px"}}>
          <li className="nav-item" style={{paddingRight:"10px"}}>
            <Link to='/'><i className="fa-solid fa-house-user"></i><b>HOME</b></Link>
            
          </li>
          
          
          <li className="nav-item" style={{paddingRight:"10px"}}>
            <Link to='/R_list'><b>Veh_Reg Applications</b></Link>
            
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
          <Link to='/L_list'><b>License Applications</b></Link>
            
          </li>
          <li className="nav-item" style={{paddingRight:"10px"}}>
          <Link to='/P_list'><b>Permit Applications</b></Link>
            
          </li>
          
          <li className="nav-item " style={{paddingRight:"10px"}}>
          <Link to='/Report'><b>Reports</b></Link>
            
          </li>
          <li className="nav-item " >
          <Link to='/Logout'><i className="fa-solid fa-right-from-bracket"></i><b>LOGOUT</b></Link>
            
          </li>
        </ul>
    </div>
    </div>
  </nav>

      </>
    );
}
export default Nav

