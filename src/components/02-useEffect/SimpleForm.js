import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        console.log('Hey!!')
    });

    const handleInputChange = () => {
        console.log("hola")
    }

    return (
        <>
            <h1>UseEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    name='name'
                    className="form-control"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            {
                (name === '123') && <Message />
            }

        </>
    )
}
