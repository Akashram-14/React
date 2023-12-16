import React, { useState } from 'react'

export default function StateHoldObject() {
    const[college,setCollege]=useState({cid:1, cname:"skct", year:2023})
    const changeDemo=()=>
    {
        setCollege((prevState)=>{return{...prevState,year:2024}})
    }
    const changeName=()=>
    {
       setCollege((prevState)=>{return{...prevState,cname:"IRTT"}})
    }
  return (
    <div>
      <h1>College ID is {college.cid}</h1>
      <h1>College name is {college.cname}</h1>
      <button onClick={changeName}>changeName</button>
      <h1>College Year is {college.year}</h1>
      <button onClick={changeDemo}>changeYear</button>
    </div>
  )
}
