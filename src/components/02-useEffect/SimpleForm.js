
import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email} = formState;


    // useEffect( () => {
    //     console.log('Hola');
    // }); // cada vez que se cambia algo sin importar que
    // en el Dom se cargara en cada  esta funcion


    useEffect( () => {
        console.log('Hola');
    }, []); // cuando le agregamos el array sin nada, 
    // solo cargara ese mensaje una sola vez

    useEffect( () => {
        console.log('Hola');
    }, [email]); // si agregas dentro del array algo
    // eso solo se disparara cuando eso en especifico cambie


    const handleOnchange = ({ target }) => {
        setFormState({
            ...formState, [target.name]: target.value
        });
    }
    // target. name ayuda que al ingresar el dato en el input,
    // toma el name de las clases de la etiqueta y lo ponemos como
    // la key del valor del objeto al que queremos
    return (
        <>
          <h1>useEffect</h1>  
          <hr/>

          <div className = "form-group">
            <input
                type = "text"
                name = "name"
                className = "form-control"
                placeholder = "Tu Nombre"
                value = {name}
                onChange = { (e) => handleOnchange(e) }
            />
          </div>
          <div className = "form-group">
          <input
                type = "text"
                name = "email"
                className = "form-control"
                placeholder = "Tu Email"
                value = {email}
                onChange = { (e) => handleOnchange(e) }
            />
          </div>

          { (name === "123") && <Message/>}
        </>
    )
}
