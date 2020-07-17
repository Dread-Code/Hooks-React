import { useState, useRef, useEffect  } from "react"


export const useFetch = ( url ) => {


    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMounted = useRef(true);

    useEffect( () => {
        return() => {
            isMounted.current = false;
        //como ismounted es falso cunado el componente deja de existir                     
        // puede utilizar esta misma referencia para llamar de manera condicional           
        // el setState
        }
    },[]);


    useEffect( () => {

        setstate({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then( resp => resp.json())
            .then( data =>{
        
                if (isMounted.current) {
                
                    setstate({
                        loading:false,
                        error: null,
                        data
                    });
                }

            })

    },[url]);

    return state;

}
