import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

export const FormCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Hey!!')
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Form Custom Hook </h1>
                <hr />


                <div className="form-group mb-1">
                    <input
                        name='name'
                        className="form-control"
                        placeholder="name"
                        autoComplete="off"
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group mb-1">
                    <input
                        name='email'
                        className="form-control"
                        placeholder="Email"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mb-1">
                    <input
                        name='password'
                        type='password'
                        className="form-control"
                        autoComplete="off"
                        placeholder="*****"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
            </form>
        </>
    )
}
