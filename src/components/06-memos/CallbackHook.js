import React, { useState, useCallback, useEffect } from 'react';

import "../02-useEffect/effects.css"
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback( (num) => {
        setCounter(c => c + num); // toca usar asi el setcounter para que se elimine
                                // el warning de la dependencia
    }, [ setCounter ]);

    useEffect( () => {
        //???
    },[ increment ])


    return (
        <div>
            <h1> UseCallback Hoo: { counter } </h1>
            <hr/>
        
        <ShowIncrement increment = { increment }/>

        </div>
    )
}
