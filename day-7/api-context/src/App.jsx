import React, { createContext } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';


const  DataContext = createContext();
function App() {
  const name= "Invertis University";
  return (
    <>
    <DataContext.Provider value={name}>
      <Child1/>
      <Child2/>
    </DataContext.Provider>

    </>
  )
}

export default App
