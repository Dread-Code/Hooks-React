import React from 'react'
import "../../components/02-useEffect/effects.css";
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultpleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    
    const { loading, data }   = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];
    // * si viene la data tomaras la data en la posicion 0
    // * null retornara un null
    // ! null retornara un false
    // * esto pasa porque al principio la data es undefined
    // * y al poner una negacion es true ponerle la segunda es false

    console.log(data);

    return (
        <div>
            <h1> BreakingBad Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className = "alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                
                    (
                        <blockquote className = "blockquote text-right">
                            <p className = "mb-0"> {quote} </p>
                            <footer className = "blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }
        <button 
            className = "btn btn-primary"
            onClick = {increment}
        >
            Siguiente
        </button>


        </div>
    )
}
