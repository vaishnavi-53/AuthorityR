import React from 'react';

function R_aptn(){
    return (
      <>
<div className="container">
    <h2 style={{justifyContent: "center",display: "flex"}}>Vehicle Registration Form</h2>
    <form action="">
      <div className="row">
        <div className="col-25">
          <label htmlFor="fname">Full Name</label>
        </div>
        <div className="col-75">
          <input type="text" id="fname" name="fullname"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="age">Age</label>
        </div>
        <div className="col-75">
          <input type="number" id="age" name="age"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="gen">Gender</label>
        </div>
        <div className="col-75">
          <select id="gen" name="gen">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label htmlFor="perad">Permanant Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="perad" name="perad"/>
        </div>
      </div>
       <div className="row">
        <div className="col-25">
          <label htmlFor="tempad">Temporary Address</label>
        </div>
        <div className="col-75">
          <input type="text" id="tempad" name="tempad"/>
        </div>
      </div>      
      <div className="row">
        <div className="col-25">
          <label htmlFor="dob">Date of Birth</label>
        </div>
        <div className="col-75">
          <input type="date" id="dob" name="dob"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="dname">Name of the dealer</label>
        </div>
        <div className="col-75">
          <input type="text" id="dname" name="dname"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="dad">Address of the dealer</label>
        </div>
        <div className="col-75">
          <input type="text" id="dad" name="dad"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="vehcls">ClassName of Vehicle</label>
        </div>
        <div className="col-75">
          <input type="text" id="vehcls" name="vehcls"/>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="eng">Engine Number</label>
        </div>
        <div className="col-75">
          <input type="number" id="eng" name="eng"/>
        </div>
      </div>
      
      <center>
      <button id="center" style={{margin:"5px", backgroundColor: "blue", color: "azure"}}>
        Reject
    </button>

    <button  id="center" style={{margin:"5px",backgroundColor: "blue", color: "azure"}}>
        Approve
    </button>
  </center>
    </form>
  </div>

      </>
    );
}
export default R_aptn





