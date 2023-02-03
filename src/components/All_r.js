import React from 'react';

function All_r(){
    return (
      <>
      <div id="registrations" ><br/>
    
    <h3>Vehicle Registrations</h3>
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
    </table>
  </div>
  </div>
      </>
    );
}
export default All_r


