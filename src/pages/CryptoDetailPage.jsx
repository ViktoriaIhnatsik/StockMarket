import React, { useEffect, useState } from 'react'
import graph from '../fake-graph.png'

export default function CryptoDetailPage(props) {

    const [cryptoItem, setCryptoItem] = useState(null)

    useEffect(() => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setCryptoItem(data))
    }, [])

    return (
        <div className="d-flex align-items-center mx-auto vh-100 w-75">
            {!cryptoItem && <p>Loading</p>}
            {cryptoItem && (
                <div className="container col-md-12 row align-items-center shadow bg-white m-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid border" src={graph} alt="this is a graph" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="names font-weight-bold">{cryptoItem.name}</h2>

                        <button className="btn btn-primary mt-2 mb-4">Köp</button>
                        <button className="btn btn-danger m-2 mb-4">Sälj</button>

                        <p>Mtd: {cryptoItem.mtd}%</p>
                        <p>Price: {cryptoItem.price} {cryptoItem.market.toUpperCase()}</p>
                        <p>Today: {cryptoItem.today}%</p>
                        <p>W1: <span> 0%</span></p>
                        <p>Y3: 0%</p>
                        <p>Y5: 0%</p>
                        <p>Ytd: 0%</p>
                    </div>
                </div>
            )}
        </div>
    )
}
