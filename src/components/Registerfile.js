import React from 'react'
import Navbar from './Navbar'


const Registerfile = () => {
  return (
    <div>
        <Navbar/>
         <div className="container">
    <div className="r0w">
        <h1>REGISTER</h1>
        <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-2">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                  <input placeholder='Enter the name' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Rollno.</label>
                    <input placeholder='Enter the rollno.' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Admission no.</label>
                    <input placeholder='Enter the admission no.' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Mobile</label>
                    <input placeholder='Enter the mobile no.' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">College</label>
                    <input placeholder='Enter the college' type="text" className="form-control"/>
                </div>

                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Username</label>
                    <input placeholder='Enter user name' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <label for="" className="form-label">P assword</label>
                    <input placeholder='Enter the password' type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">Register</button>
                </div>
                
            </div>    
        </div>
    </div>
</div></div>
  )
}

export default Registerfile