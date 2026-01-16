        import React, { useState } from "react";
        
        let Counter = ()=>{
            const [count, setCount] = useState(0);
            
            const increaseCounter = () => {
            setCount(count + 1);
        };
    return (
        <div>
            <h3>Counter</h3>
            <p>Count: {count}</p>
            <button onClick={increaseCounter}>Counter</button>
        </div> 
    )
    }

    export default Counter