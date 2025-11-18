// Updater function = A function passed as an argument to setState() usually
//                    ex: setYear(arrow function).
//                    Allow for safe updates based on the previous state.
//                    used with multiple state updates and asynchronous functions.
//                    Good practice to use updater functions.
import React, {useState} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);

    function increment(){

        /* Uses the CURRENT state to calculate the NEXT state.
         set functions do not trigger an update
         React batches together state updates for performance reasons.
         NEXT state becomes the CURRENT state after an update.*/

        //setCount(count + 1); //setCount( 0 + 1);
        //setCount(count + 1); //setCount( 0 + 1);
        //setCount(count + 1); //setCount( 0 + 1);
        // Updates only one time (+1, even if three setCount call)

        /* Takes the PENDING state to calculate NEXT state.
         React  puts my updater function in a queue (waiting in line)
         During the next render, it will call them in the same order
         */
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
        // Now updates three times making it +3 on every click on the increase button.
    };
    function reset(){
        setCount(0);
    };
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increase</button>
        </>
    );

}

export default MyComponent;
