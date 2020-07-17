
import React, { useEffect } from 'react';
import './effects.css';
import { useForm } from '../../hooks/useForm';

export const FormwithCustomHook = () => {

    const [values, handleOnchange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = values;

    useEffect(() => {
        console.log('Email');
        
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }
    
    return (
        <form onSubmit = { handleSubmit }>
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
          <div className = "form-group">
          <input
                type = "password"
                name = "password"
                className = "form-control"
                placeholder = "****"
                value = {password}
                onChange = { (e) => handleOnchange(e) }
            />
          </div>

          <button type  = "submit" className = "btn btn-primary">Guardar</button>
        </form>
    )
}
