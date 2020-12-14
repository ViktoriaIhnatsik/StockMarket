import React, { useState, useEffect } from 'react';


export default function MarketsCompaniesDetailPage(props) {
    const [companiesItem, setCompaniesItem] = useState(null);
    console.log(props)
    useEffect(() => {
        const id = props.match.params.id
        const companies = props.match.params.companies
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${companies}/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setCompaniesItem(data))
    }, [])

    return (
        <div>
            {!companiesItem && <p>Loading</p>}
            {companiesItem &&
                <div>
                    <h2>{companiesItem.name}</h2>
                    <p>Market: {companiesItem.market}</p>
                    <p>Mtd: {companiesItem.mtd}</p>
                    <p>Price: {companiesItem.price}</p>
                    <p>Today: {companiesItem.today}</p>
                    <p>W1: {companiesItem.w1}</p>
                    <p>Y3: {companiesItem.y3}</p>
                    <p>Y5: {companiesItem.y5}</p>
                    <p>Ytd: {companiesItem.ytd}</p>
                </div>
            }


        </div>
    )
}
