import { useState } from "react";



function Counter() {
    let [count, setCount] = useState(0);
    return (<div>
        <div>{count}</div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Click</button>
    </div>)
}
export default Counter;