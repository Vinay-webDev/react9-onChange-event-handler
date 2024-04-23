/* onChange = a event handler used primarily with form
              elements ex,, <input/> <select/> <textarea/>
              <radio/> 
              Triggers a function every time the value of 
              the input changes *** */ 

import React,{useState} from 'react';

function Component() {

    const [name, setName] = useState("");

    function handleNameChange(event) {
        setName(event.target.value);
    }
    return(
            <div>
                <input value={name} onChange={handleNameChange} />
                <p> Name: {name} </p>
            </div>);
}

export default Component




