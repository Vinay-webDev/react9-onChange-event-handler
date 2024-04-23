/* onChange = a event handler used primarily with form
              elements ex,, <input/> <select/> <textarea/>
              <radio/> 
              Triggers a function every time the value of 
              the input changes *** */ 

import React,{useState} from 'react';

function Component() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    return(
            <div>
                <input value={name} onChange={handleNameChange} />
                <p> Name: {name} </p>
                
                <input value={quantity} onChange={handleQuantityChange} type="number" />
                <p> Quantity: {quantity} </p>
            </div>);
}

export default Component




