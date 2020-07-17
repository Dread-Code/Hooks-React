import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import "../02-useEffect/effects.css"
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 1000 );


    const [show, setShow] = useState(true);
    
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    // como el valor esta memorizado no va ser falta de que vuelva a lanzar la funcion
    // solo la lanzara cuando el COUNTER se incremente

    return (
        <div>
            <h1>MemoHook</h1>
            <hr/>
            <h2> Counter: { counter } </h2>
            <p> { memoProcesoPesado } </p>
            <button
                className = "btn btn-primary"
                onClick = { increment }
            > 
                increment
            </button>

            <button
                className = "btn btn-outline-primary ml-3"
                onClick = { () => setShow(!show)}
            > 
                Show/Hide: { JSON.stringify(show) }
            </button>
        </div>
    )
}
