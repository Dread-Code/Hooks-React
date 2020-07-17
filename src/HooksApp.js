import React from 'react'
// import { UseState } from './components/UseState';
import './HooksApp.css';
import { CounterWithCustomHook } from './components/CounterWithCustomHook';

export const HooksApp = () => {
    return (
        <div>
            <h1>Counter App</h1>
            {/* <UseState/> */}
            <CounterWithCustomHook/>
        </div>
    )
}
