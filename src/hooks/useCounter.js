import { useState } from "react"


export const useCounter = ( init = 1) => {
    
    const [counter, setCounter] = useState(init);

    const increment = (factor) => setCounter(counter + 1);

    const decrement = (factor) => setCounter(counter - 1);

    const reset = () => setCounter(init);

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
