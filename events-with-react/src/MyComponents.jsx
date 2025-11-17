// onChange = event handler that is used primarily with form elements
//            ex: <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes.

import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("0");
    const [comment, setComment] = useState("Additional Delivery instruction!");
    const [payment, setPayment] = useState("Visa");
    const [shipping, setShipping] = useState("Delivery");

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }
    
    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>
            
            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity: {quantity}</p>
            
            <textarea value={comment} onChange={handleCommentChange} name="" id=""></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange} name="" id="">
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>
            
            <p>Delivery Options: </p>
            <label htmlFor="">
                <input type="radio" value="Pick Up"
                        checked={shipping === "Pick Up"}
                        onChange={handleShippingChange}/>
                Pick Up
            </label><br />
            <label htmlFor="">
                <input type="radio" value="Deliver"
                        checked={shipping === "Deliver"}
                        onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent