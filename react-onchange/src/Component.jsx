/* onChange = a event handler used primarily with form
              elements ex,, <input/> <select/> <textarea/>
              <radio/> 
              Triggers a function every time the value of 
              the input changes *** */ 

import React,{useState} from 'react';

function Component() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
    return(
            <div>
                <input value={name} onChange={handleNameChange} />
                <p> Name: {name} </p>
                
                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p> Quantity: {quantity} </p>

                <textarea value={comment} onChange={handleCommentChange} 
                           placeholder="Enter delivery instructions" />
                <p> Comment: {comment} </p>

                <select value={payment} onChange={handlePaymentChange} > 
                <option value=""> select your payment method </option>
                <option value="visa"> visa </option>
                <option value="master card"> master card </option>
                <option value="gift card"> gift card </option>
                <option value="upi"> upi </option>
                </select>
                <p> Payment: {payment} </p>

                <label>
                    <input type="radio" value="pick up" 
                     checked={shipping === "pick up"} onChange={handleShippingChange} />
                   pick up
                </label>
                <br />
                <label>
                    <input type="radio" value="delivery"
                     checked={shipping === "delivery"} onChange={handleShippingChange} />
                    delivery
                </label>
                <p> Shipping: {shipping} </p>

            </div>);
}
export default Component




