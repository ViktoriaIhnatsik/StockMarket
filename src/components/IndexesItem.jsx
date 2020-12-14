import React from 'react'
import { Link } from 'react-router-dom'





export default function IndexesItem({ indexes }) {

    let style = { color: "red" }

    if (indexes.today > 0) {
        style = { color: "green" }
    }

    return (
        <div className="col-md-6 mr-2 pr-3 shadow align-center">
            <Link
                className="btn btn-block"
                to={`/indexes/${indexes.ticker}`}>
                <div>
                    <ul className="list-inline d-flex justify-content-between ">
                        <li className="list-inline-item "><p>{indexes.name}</p></li>
                        <li className="list-inline-item"><p className="text-right" style={style}>{indexes.today}%</p></li>
                        <li className="list-inline-item"><p>{indexes.price}:-</p></li>
                    </ul>
                </div>
            </Link>
        </div >
    )
}
