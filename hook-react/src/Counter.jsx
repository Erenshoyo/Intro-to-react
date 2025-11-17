import React, {useState} from "react"
function Counter() {

    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1);
    }
    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button id="b1" className="counter-button" onClick={decrement}>Decrease</button>
            <button id="b2" className="counter-button" onClick={reset}>Reset</button>
            <button id="b3" className="counter-button" onClick={increment}>Increase</button>
        </div>
    )
}

export default Counter