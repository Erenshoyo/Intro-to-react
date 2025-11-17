// React hook = Hooks are special functions that let functional components tap into  
//             React’s state, lifecycle, and rendering logic — giving you all   
//             the power of class components and then some, but with cleaner code, 
//             better performance, and way fewer headaches

// useState() = A react hook that allows the creation of a stateful variable and a setter
//              function to update its value in the virtual DOM.
//              [name,setName]
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
function App() {

  return (
    <div>
      {/* <MyComponent/> */}
      <Counter/>
    </div>
  )
}

export default App
