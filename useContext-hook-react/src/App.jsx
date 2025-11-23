// useContext() = React hook that allows you to share values between 
//                multiple level of components without passing props through each level.


// PROVIDER COMPONENT
// 1. Import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//        <child/>
//    </MyContext.Provider>


// CONSUMER COMPONENTS
// 1. import React, { useContext } from "react";
//    import { myContext} from "./ComponentA";
// 2. const value = useContext(MyContext);


import React from "react"
import ComponentA from "./ComponentA.jsx"

function App() {

  return (
    <>
      <ComponentA/>
    </>
  )
}

export default App
