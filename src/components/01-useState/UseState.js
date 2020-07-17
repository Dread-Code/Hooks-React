import React, { useState } from 'react'

export const UseState = () => {

    const [state, setstate] = useState({
        counter1: 10,
        counter2: 20
    });

    const { counter1, counter2 } = state;

    return (
        <div>
            <h1>{counter1}</h1>
            <h2>{counter2}</h2>
            <button 
            className = "btn btn-primary"
            onClick = { () => setstate({
                ...state, // crea la copia con el spread
                counter1: counter1 +1 // y ahora si se muta el valor querramos
                })
            }
            >+1</button>
        </div>
    )
}
