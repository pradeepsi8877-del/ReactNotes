import React from 'react'

function ListWithoutKey() {
    const list =["india", "usa","pak","sri lanka"]
    const listItems = list.map((item)=> <li>{item}</li>)
  return (
    <div>
      <h1>Countries list</h1>
      <ul>{listItems}</ul>
    </div>
  )
}

export default ListWithoutKey
