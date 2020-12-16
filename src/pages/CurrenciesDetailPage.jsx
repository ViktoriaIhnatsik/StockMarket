import React, { useEffect, useState } from "react";
import graph from '../fake-graph.png'

export default function CurrenciesDetailPage(props) {
  const [currenciesItem, setCurrenciesItem] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrenciesItem(data));
  }, []);

  return (
    <div className="d-flex align-items-center mx-auto vh-100 w-75">
      {!currenciesItem && <p>Loading</p>}
      {currenciesItem && (
        <div className="container col-md-12 row align-items-center">
          <div className="col-md-6">
            <img className="img-fluid border" src={graph} alt="this is a graph" />
          </div>
          <div className="col-md-6">
            <h2 className="names font-weight-bold">{currenciesItem.name}</h2>

            <button className="btn btn-primary mt-2 mb-4">Köp</button>
            <button className="btn btn-danger m-2 mb-4">Sälj</button>

            <p>Mtd: {currenciesItem.mtd}%</p>
            <p>Price: {currenciesItem.price} {currenciesItem.market.toUpperCase()}</p>
            <p>Today: {currenciesItem.today}%</p>
            <p>W1: <span> {currenciesItem.w1}%</span></p>
            <p>Y3: {currenciesItem.y3}%</p>
            <p>Y5: {currenciesItem.y5}%</p>
            <p>Ytd: {currenciesItem.ytd}%</p>
          </div>
        </div>
      )}
    </div>
  );
}
