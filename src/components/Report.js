import React from 'react';
import { Link } from 'react-router-dom';

function Report() {
    return (
      <>

       <div className="search-container">
        <form action="report.html">
            <p>From:</p>
          <input type="date" placeholder="dd-mm-yyyy" name="from"/>
          <p>To:</p>
          <input type="date" placeholder="dd-mm-yyyy" name="to"/>
        </form>
      </div>

      
 
  
  
  <div id="registrations" style={{textAlign:"center"}}>
  <h3>Vehicle Registrations</h3>
  <br/>
    <div className="dropdown">
    <button className="dropbtn">SELECT STATUS</button>
    <div className="dropdown-content">




      
        <Link to="All_r">All</Link>
        <Link to="Pen_r">PENDING</Link>
        <Link to="Ap_r">APPROVED</Link>
        <Link to="Rej_r">REJECTED</Link>
      
      
      
      
    </div>
    </div>
    
    <br/>
    <div className="search-container">
      <form action="report.html">
        <p>Application NO.</p>
        <input type="text" placeholder="Search" name="Vr_A_No"/>
      </form>
    </div>
    <br/>
    <div className="table-responsive">
    <table id="Info" >
      <tbody>
       <tr>
        <th>S.No</th>
        <th>RC No</th>
        <th>Regd. Owner</th>
        <th>Address</th>
        <th>Vehicle className</th>
        
        <th>Registration Date</th>
        

       </tr>
      <tr>
        <td>1</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
      
      </tr>
      <tr>
        <td>2</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
      </tr>
      <tr>
        <td>3</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
      </tr>
      <tr>
        <td>4</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
      </tr>
      <tr>
        <td>5</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
      </tr>
      </tbody>
    </table>
    
  </div>
  </div>

  
  <div id="license" style={{textAlign:"center"}}><br/>

    <h3>License Registrations</h3>
    <br/>
    <div className="dropdown">
    <button className="dropbtn">SELECT STATUS</button>
    <div className="dropdown-content">
    <a href="index.html">ALL</a>
    <a href="pending.html">PENDING</a>
    <a href="approved.html">APPROVED</a>
    <a href="rejected.html">REJECTED</a>
    </div>
  </div>
    <div className="search-container">
      <form action="report.html">
        <p>Application NO.</p>
        <input type="text" placeholder="Search" name="Lr_A_No"/>
      </form>
    </div>
    <br/>
    <div className="table-responsive">
    <table id="Info" >
      <tbody>
       <tr>
        <th>S.No</th>
        <th>Full Name</th>
        <th>Regd. Owner</th>
        <th>Address</th>
        <th>Vehicle className</th>
        <th>Registration Date</th>
        

       </tr>
      <tr>
        <td>1</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
           
      </tr>
      <tr>
        <td>2</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
           
      </tr>
      <tr>
        <td>3</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
        
      </tr>
      <tr>
        <td>4</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
          
      </tr>
      <tr>
        <td>5</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
            
      </tr>
      </tbody>
    </table>
  </div>
  </div>
  <div id="permits"style={{textAlign:"center"}} ><br/>
    <h3>Permit Registrations </h3>
    <br/>
    <div className="dropdown">
    <button className="dropbtn">SELECT STATUS</button>
    <div className="dropdown-content">
    <a href="index.html">ALL</a>
    <a href="pending.html">PENDING</a>
    <a href="approved.html">APPROVED</a>
    <a href="rejected.html">REJECTED</a>
    </div>
  </div>
    <div className="search-container">
      <form action="report.html">
        <p>Application NO.</p>
        <input type="text" placeholder="Search" name="Pr_A_No"/>
      </form>
    </div>
    <br/>
    <div className="table-responsive">
    <table id="Info" >
    <tbody>
       <tr>
        <th>S.No</th>
        <th>Full Name</th>
        <th>Address</th>
        <th>Vehicle className</th>
        <th>Place</th>
        <th>Reason</th>

       </tr>
      <tr>
        <td>1</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
           
      </tr>
      <tr>
        <td>2</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
            
      </tr>
      <tr>
        <td>3</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
        
      </tr>
      <tr>
        <td>4</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
            
      </tr>
      <tr>
        <td>5</td>
        <td> </td> 
        <td></td> 
        <td></td> 
        <td></td> 
        <td></td> 
        
           
      </tr>
      </tbody>
    </table>
  </div>
  </div>
  <br/>
    <br/>
    
      </>
    );
}
export default Report