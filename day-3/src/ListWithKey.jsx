
import React from 'react'

function ListWithKey() {
    let number = [1,2,3,45,5];
    const item = number.map((num,index)=> 
    <li key={index}>{num}</li>)
  return (
    <div>
        <h1>Number list</h1>
    <ul>{item}</ul>
    </div>
  )
}

export default ListWithKey
