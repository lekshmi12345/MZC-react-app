import React, { useState } from 'react'

const Student = () => {
   var [name,setName]=useState("Lekshmi") 
   var [age,setAge]=useState("15")
   var [college,setCollege]=useState("Mount zion")
   const changeName= () => {
       setName(
           name="Rahul"
       )
       setAge(
           age="32"
       )
       setCollege(
           college="mzc"
       )
   }

   
  return (
      <>
    <div>
    
    <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row">
                <div class="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label><br></br>
                    <label for="" class="form-label">{name}</label>
                </div>
                <div class="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
<label for="" class="form-label">Age</label><br></br>
<label for="" class="form-label">{age}</label>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<label for="" class="form-label">{college}</label>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Mount Zion College Of Engineering</label>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={changeName}  class="btn btn-success">CHANGE</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    </>
    

  )
}

export default Student