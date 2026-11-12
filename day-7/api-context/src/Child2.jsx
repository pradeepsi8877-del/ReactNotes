import React, { useContext } from 'react'
import {DataContext} from './App'
function Child2() {
    const name = useContext(DataContext)
  return (
    <div>
      <h1>my institute name is {name}</h1>
    </div>
  )
}

export default Child2
