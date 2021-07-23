import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        console.log('Mensaje Montado')

        return () => {
            console.log('Mensaje Desmontado')
        }
    }, [])

    return (
        <>
            <h2>Eres un Message</h2>
        </>
    )
}
