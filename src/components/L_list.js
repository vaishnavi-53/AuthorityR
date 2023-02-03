import React from 'react';
import {Link} from 'react-router-dom';
function L_list(){
    return (
      <>
      <div id="l_reg" ><br/>
    <h3>License Registration Applications</h3>
    <br/>
    <div className="table-responsive">
    <table id="Info" >
      <tbody>
       
      <tr>
        <td>Applicant name1      </td>
        <td>
          <Link to='/L_aptn'><u style={{color:"black"}}>Click Here for more details</u></Link>
        </td>
        
      </tr>
      <tr>
        <td>Applicant name2      </td>
        <td>
          <Link to='/L_aptn'><u style={{color:"black"}}>Click Here for more details</u></Link>
        </td>
      </tr>
      <tr>
        <td>Applicant name3      </td>
        <td>
          <Link to='/L_aptn'><u style={{color:"black"}}>Click Here for more details</u></Link>
        </td>
      </tr>
      <tr>
        <td>Applicant name4      </td>
        <td>
          <Link to='/L_aptn'><u style={{color:"black"}}>Click Here for more details</u></Link>
        </td>
       
      </tr>
      <tr>
        <td>Applicant name5      </td>
        <td>
          <Link to='/L_aptn'><u style={{color:"black"}}>Click Here for more details</u></Link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
      </>
    );
}
export default L_list

