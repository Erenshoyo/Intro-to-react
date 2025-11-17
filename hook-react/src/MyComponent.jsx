import React, {useState} from 'react';
function MyComponent(){
    
    const[name, setName] = useState("Asif");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);
    
    const updateName = () => {
        setName("Tauhid");
    }
    
    const IncrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            <p>Age: {age}</p>
            <button onClick={IncrementAge}>Increment Age</button>
            
            <p>Employee: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent