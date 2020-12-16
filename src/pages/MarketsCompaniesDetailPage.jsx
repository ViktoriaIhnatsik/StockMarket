import React, { useState, useEffect } from 'react';
import graph from '../pictures/graph.PNG';



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
        <div className="container">
            {!companiesItem && <p>Loading</p>}
            {companiesItem &&
                <div className="container shadow w-50 mt-5 bg-light">
                    <div className ="row">
                        <div className="col-sm">
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
                        <div className ="col-sm mt-4">
                            <img src={graph} alt='import'width="304" height="236"/>
                            <button type="button" class="btn btn-success btn-sm pl-4 pr-4 mt-5 ml-5">Buy</button>
                            <button type="button" class="btn btn-danger btn-sm pl-4 pr-4 mt-5 ml-4">Sell</button>
                        </div>  
                    </div>
                </div>
            }


        </div>
    )
}
