// import React, { useState, useMemo } from "react";
// function App() {
//     const [count, setCount] = useState(0);
//     const [number, setNumber] = useState(10);
//     const expensiveCalculation = useMemo(() => {
//         return number * 100;
//     }, [number]);
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <h2>Result: {expensiveCalculation}</h2>
//             <button onClick={() => setCount(count + 1)}>
//                 Increase Count
//             </button>
//             <button onClick={() => setNumber(number + 10)}>
//                 Change Number
//             </button>
//         </div>
//     );
// }

// export default App;




// import React, { useReducer } from "react";
// function reducer(state, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return { count: state.count + 1 };
//         case "DECREMENT":
//             return { count: state.count - 1 };
//         case "RESET":
//             return { count: 0 };
//         default:
//             return state;
//     }
// }
// function App() {
//     const [state, dispatch] = useReducer(reducer, {
//         count: 0
//     });
//     return (
//         <div>
//             <h2>Count: {state.count}</h2>
//             <button onClick={() => dispatch({ type: "INCREMENT" })}>
//                 Increment
//             </button>
//             <button onClick={() => dispatch({ type: "DECREMENT" })}>
//                 Decrement
//             </button>
//             <button onClick={() => dispatch({ type: "RESET" })}>
//                 Reset
//             </button>
//         </div>
//     );
// }
// export default App;

import React, { useLayoutEffect, useRef } from "react";
function App() {
    const boxRef = useRef(null);
    useLayoutEffect(() => {
        const width = boxRef.current.offsetWidth;
        console.log("Box Width:", width);
    }, []);
    return (
        <div ref={boxRef} style={{ width: "200px" }}>
            Hello React
        </div>
    );
}
export default App;