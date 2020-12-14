import React, { useState, useEffect } from 'react'

export default function IndexesDetailPage(props) {

    const [indexesItem, setIndexesItem] = useState(null)

    let style = { color: "red" }



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
                <div className="container border w-50 mt-5 ">
                    <h2>{indexesItem.name}</h2>
                    <p>Market: {indexesItem.market.toUpperCase()}</p>
                    <p>Mtd: {indexesItem.mtd}</p>
                    <p>Price: {indexesItem.price}:-</p>
                    <p style={style}>Today: {indexesItem.today}%</p>
                    <p style={style}>W1: <p> {indexesItem.w1}%</p></p>
                    <p style={style}>Y3: {indexesItem.y3}%</p>
                    <p style={style}>Y5: {indexesItem.y5}%</p>
                    <p style={style}>Ytd: {indexesItem.ytd}%</p>
                </div>
            )}
        </div>
    )
}
