import React from 'react'
import { Link } from 'react-router-dom'

export default function MarketsItem({ markets }) {

    return (
        <div className="col-md-2 shadow p-3">
            <Link
                className="btn  btn-block"
                to={`/markets/${markets}`}>
                {markets}
            </Link>
        </div>
    )
}
