import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("lechu")
const changeName  =() =>{
    setName (
      name = "vani"
    )
}


  return (

    <div> logged in as {name}
    <button onClick={changeName} className='btn btn-success'>change name</button></div>
  )
}

export default Profile