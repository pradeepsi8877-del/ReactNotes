import React from 'react'
import Child2 from './Child2'
function Child1({city}) {
  return (
    <div>
      <Child2 city={city}/>
    </div>
  )
}

export default Child1
