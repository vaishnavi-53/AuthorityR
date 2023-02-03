import React from 'react';

function L_aptn(){
    return (
      <>

<div className="container">
    <h2 style={{justifyContent: "center",display: "flex"}}>License Application Form</h2>
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
          <label htmlFor="age">S/O or W/O or D/O</label>
        </div>
        <div className="col-75">
          <input type="number" id="so" name="so"/>
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
      <div className="d-flex flex-row">
        <div>
        <input type="checkbox" className="check-box"/>
    </div>
    <div >
        <span className="ml-3">I hereby declare that all my details uploaded are right.</span>
    </div>
      </div>
      <br/>
      <center>
        <button id="center" style={{margin:"5px", backgroundColor: "blue", color: "azure"}}>
          Reject
      </button>
  
      <button  id="center" style={{margin:"5px", backgroundColor: "blue", color: "azure"}}>
          Approve
      </button>
    </center>
    </form>

  </div>
      </>
    );
}
export default L_aptn

