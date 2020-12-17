import React, { useState, useEffect } from 'react'
import graph from '../fake-graph.png'

export default function IndexesDetailPage(props) {

    const [indexesItem, setIndexesItem] = useState(null)

    //let style = { color: "red" }

    useEffect(() => {
        const id = props.match.params.id

        const url = `https://market-data-collector.firebaseio.com/market-collector/indexes/se/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setIndexesItem(data))
    }, [])

    return (
        <div className="d-flex align-items-center mx-auto vh-100  p-5 w-75">
            {!indexesItem && <p>Loading</p>}
            {indexesItem && (
                <div className="container col-md-12 row shadow bg-white m-5 p-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-fluid border" src={graph} alt="this is a graph" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="names font-weight-bold">{indexesItem.name}</h2>

                        <button className="btn btn-primary mt-2 mb-4">Köp</button>
                        <button className="btn btn-danger mt-2 mb-4">Sälj</button>

                        <p>Mtd: {indexesItem.mtd}%</p>
                        <p>Price: {indexesItem.price} {indexesItem.market.toUpperCase()}K</p>
                        <p>Today: {indexesItem.today}%</p>
                        <p>W1: <span> {indexesItem.w1}%</span></p>
                        <p>Y3: {indexesItem.y3}%</p>
                        <p>Y5: {indexesItem.y5}%</p>
                        <p>Ytd: {indexesItem.ytd}%</p>
                    </div>
                </div>
            )}
        </div>
    )
}
