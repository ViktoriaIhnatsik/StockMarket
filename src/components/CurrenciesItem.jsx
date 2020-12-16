import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function CurrenciesItem({ currencies }) {
  return (
    <div className="col-md-3 shadow m-2 p-3 bg-light  rounded ">
      <Link
        className="btn btn-block bg-light  font-weight-bold"
        to={`/currencies/${currencies.ticker}`}
      >
        {currencies.name}
      </Link>
    </div>
  );
}
