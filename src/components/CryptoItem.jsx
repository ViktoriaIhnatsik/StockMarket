import React from 'react'
import { Link } from 'react-router-dom'

export default function CryptoItem({crypto}) {
    return (
        <div className="col-md-2 shadow ">
            
    <Link className="btn btn-block " to ={`/crypto/${crypto.ticker}`}>{crypto.name}</Link> 
        </div>
    )
}
