import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    // cuando no requiere ningun argumento se puede llamar a la
    //funcion desde la referencia en el evento

    // pero si se necesita pasar un parametro se requerira que se 
    // realice el callback en el evento

    return (
        <>
           <h1>Counter wwith hook: {state}</h1> 
           <hr/>
           <button className = "btn" onClick = { () => increment(2) }>+1</button>
           <button className = "btn" onClick = { reset }>reset</button>
           <button className = "btn" onClick = { () =>  decrement() }>-1</button>
        </>
    )
}
