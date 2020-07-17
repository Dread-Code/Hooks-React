import React from 'react'

export const ShowIncrement = ({ increment }) => {

    return (    
        <button
            className = "btn btn-outline-primary"
            onClick = { () => {
                increment(5);
            }}
        >
            
        </button>
    )
}
