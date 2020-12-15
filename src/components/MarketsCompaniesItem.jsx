import React from 'react'
import { Link } from 'react-router-dom'

export default function MarketsCompaniesItem({ marketsCompanies }) {
    return (
        <div className="col-md-3 shadow pd-3 m-2">
            <Link
                className="btn  btn-block"
                to={`/markets/${marketsCompanies.market}/${marketsCompanies.ticker}`}>
                {marketsCompanies.name}
            </Link>
        </div>
    )
}
