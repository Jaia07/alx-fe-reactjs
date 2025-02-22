import { useState } from "react";

function Counter() {

    const [ count, setCount ] = useState(0);

    function Increment() {
        setCount(count + 1);
    }

    function Decrement() {
        setCount(count - 1);
    }

    function Reset() {
        setCount(0);
    }
    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;