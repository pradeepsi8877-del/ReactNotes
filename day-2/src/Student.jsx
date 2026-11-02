// import React from 'react'

// // destructuring
// function Student({name,course,age}) {
//   return (
//    <>
//    <h1>My name is {name}</h1>
//    <h2>My course is {course}</h2>
//    <h3>my age is {age}</h3>
//    </>
//   )
// }

// export default Student

// default props 
import React from 'react'

function Student({name ="Guest", role="visitor"}) {
  return (
    <div>
      <h1>name : {name}</h1>
      <h3>role:{role}</h3>
    </div>
  )
}

export default Student
