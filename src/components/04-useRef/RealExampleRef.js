import React, { useState } from 'react';
import { MultpleCustomHooks } from '../03-examples/MultpleCustomHooks';

import "../02-useEffect/effects.css";

export const RealExampleRef = () => {

    const [Show, setShow] = useState(false);
    


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>

        { Show && <MultpleCustomHooks/>}

        <button 
            className = "btn btn-primary mt-5"
            onClick = { () => {
                setShow( !Show)
            }}
        >
            Show/Hide
        </button>

        </div>
    )
}
