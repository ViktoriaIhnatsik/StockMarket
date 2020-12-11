import React from 'react'
import { Link } from 'react-router-dom'

export default function CurrenciesItem({currencies}) {
  return (
    <div className="col-md-2 shadow p-3">
      <Link
      className="btn  btn-block" 
      to={`/currencies/${currencies.ticker}`}>
        {currencies.name}
      </Link>
    </div>
  )
}
