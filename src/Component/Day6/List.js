//  export default function List()
//  {
//      const animals = ["dog", "cat", "lion", "tiger"]
//      const result = animals.map((ani,index)=><li key={index}>{index}=>{ani}</li>)
//      return(
//          <div>
//              <ul type="none">
//                  {result}
//              </ul>
//         </div>
//     )
// }

import React from 'react'

export default function List() {
    const college=[{id:1, stuName:"akash", age:19},
    {id:1, stuName:"darshan", age:20},
    {id:1, stuName:"deepak", age:18}]

    const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
  return (
    <div style={{backgroundColor:"yellow"}}>
      <h1>List of Students</h1>
      {display}
    </div>
  )
}
