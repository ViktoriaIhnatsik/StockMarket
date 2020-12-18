import React, { useState, useEffect } from 'react';
import graph from '../fake-graph.png'

export default function MarketsCompaniesDetailPage(props) {
    const [companiesItem, setCompaniesItem] = useState(null);
    useEffect(() => {
        const id = props.match.params.id
        const companies = props.match.params.companies
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${companies}/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setCompaniesItem(data))
    }, [])

    return (
        <div className="d-flex align-items-center mx-auto vh-100 w-75">
            {!companiesItem && <p>Loading</p>}
            {companiesItem && (
                <div className="container col-md-12 row align-items-center shadow bg-white m-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid border" src={graph} alt="this is a graph" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="names font-weight-bold">{companiesItem.name}</h2>

                        <button className="btn btn-primary mtrb-2">Köp</button>
                        <button className="btn btn-danger m-2">Sälj</button>

                        <p>Market: {companiesItem.market.toUpperCase()}</p>
                        <p>Mtd: {companiesItem.mtd}%</p>
                        <p>Price: {companiesItem.price}</p>
                        <p>Today: {companiesItem.today}%</p>
                        <p>W1: <span> {companiesItem.w1}%</span></p>
                        <p>Y3: {companiesItem.y3}%</p>
                        <p>Y5: {companiesItem.y5}%</p>
                        <p>Ytd: {companiesItem.ytd}%</p>
                    </div>
                </div>
            )}
        </div>
    )
}
