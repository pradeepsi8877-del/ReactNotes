// import React, { useRef, useState } from "react";

// function App() {
//     const inputRef = useRef(null);
//     const[count, setCount] = useState(0);

//     const handleClick = () => {
//         inputRef.current.focus();

//     };

//     return (
//         <div>
//             <input ref={inputRef} placeholder="Enter Name" />
//               <h2>count :{count}</h2>
//             <button onClick={handleClick}>
//                 Focus Input
//             </button>
//               <button onClick={()=> setCount(count +1)}>Increment</button>
//         </div>
//     );
// }

// export default App;

import React from 'react'
import FetchSearch from './FetchSearch'

function App() {
  return (
    <div>
      <FetchSearch/>
    </div>
  )
}

export default App
