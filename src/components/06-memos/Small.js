import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log("Me volvi a llamar hdp maricon :C")
    return (
        <small>
            {value}
        </small>
    )
});

//Sirve apra evitar que un componente se renderice cuando sus 
//propiedades no han cambiado
// En teoria memoriza la propiedad que le hay llegado
