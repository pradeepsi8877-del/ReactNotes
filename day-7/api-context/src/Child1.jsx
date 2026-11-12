import React, { useContext } from 'react'
import {DataContext} from './App'


function Child1() {
    const name = useContext(DataContext)
  return (
   <>
    <h1>my institute name is {name}</h1>
   </>
  )
}

export default Child1
