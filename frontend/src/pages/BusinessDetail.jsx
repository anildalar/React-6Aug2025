import React from 'react'
import { useParams } from 'react-router-dom';

export default function BusinessDetail() {
    const { id } = useParams()
    return (
        <>
            <div>BusinessDetail</div>
            <p>ID: {id}</p>
        </>
    )
}
