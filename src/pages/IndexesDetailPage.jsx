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
        <div>
            {!indexesItem && <p>Loading</p>}
            {indexesItem && (
<<<<<<< HEAD
                <div className="container col-md-12 w-100 mt-5 mx-auto row">
                    <div className="col-md-6">
                        <img className="img-fluid border" src={graph} alt="this is a graph" />
                    </div>
                    <div className=" col-md-2">
                        <h2>{indexesItem.name}</h2>
                        <ul className="list-block">
                            <p>Market: {indexesItem.market.toUpperCase()}</p>
                            <p>Mtd: {indexesItem.mtd}</p>
                            <p>Price: {indexesItem.price}:-</p>
                            <p>Today: {indexesItem.today}%</p>
                            <p>W1: <span> {indexesItem.w1}%</span></p>
                            <p>Y3: {indexesItem.y3}%</p>
                            <p>Y5: {indexesItem.y5}%</p>
                            <p>Ytd: {indexesItem.ytd}%</p>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <button className="btn col-md-4 btn-success m-1 d-block">Köp</button>
                        <button className="btn col-md-4 btn-danger m-1 d-block">Sälj</button>
                    </div>
=======
                <div className="container  w-50 mt-5 shadow ">
                    <h2>{indexesItem.name}</h2>
                    <p>Market: {indexesItem.market.toUpperCase()}</p>
                    <p>Mtd: {indexesItem.mtd}</p>
                    <p>Price: {indexesItem.price}:-</p>
                    <p style={style}>Today: {indexesItem.today}%</p>
                    <p style={style}>W1: <p> {indexesItem.w1}%</p></p>
                    <p style={style}>Y3: {indexesItem.y3}%</p>
                    <p style={style}>Y5: {indexesItem.y5}%</p>
                    <p style={style}>Ytd: {indexesItem.ytd}%</p>
>>>>>>> d508f601a91427d83f51c825c645744469d4c701
                </div>
            )}
        </div>
    )
}
