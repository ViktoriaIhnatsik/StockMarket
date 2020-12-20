import React, { useState, useEffect } from 'react'
import MarketsCompaniesItem from '../components/MarketsCompaniesItem'

const marketObject = {
    "euronext-paris": "Euronext Paris",
    "first-north": "First North",
    "frankfurter-wertpapierborse": "Frankfurter-Wertpapierborse",
    "helsingforsborsen": "Helsingforsbörsen",
    "kopenhamnsborsen": 'Köpenhamnsbörsen',
    "nasdaq": "Nasdaq",
    "new-york-stock-exchange": "New York Stock Exchange",
    "ngm-equity": "Ngm Equity",
    "ngm-nordic-mtf": "Ngm Nordic Mtf",
    "osloborsen": "Oslobörsen",
    "spotlight": "Spotlight",
    "stockholmsborsen": "Stockholmsbörsen"
    };



export default function MarketsCompaniesListPage(props) {
    const [marketsCompaniesList, setMarketsCompaniesList] = useState(null)

    let id = props.match.params.companies
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setMarketsCompaniesList(data))

    }, [])

    let newId

    Object.entries(marketObject).forEach(([keyListMarket, valueListMarket]) => { //loop through keys array
        if (keyListMarket === id) {
            newId = valueListMarket
        }
        });
            
            return (
                <div className="container pt-5 pb-5">
                <div className ="row justify-content-center text-center">
                    <h1>{newId}</h1>
                </div>

            {!marketsCompaniesList && <p>Loading</p>}
            <div className="row">
        <ul className="col-md-10 mw-100 list-inline mx-auto align-items-center lightgray p-3 d-flex justify-content-center">
          <li className="col-md-4 mr-3 text-left pr-5"><strong>Stock</strong></li>
          <li className="col-md-3 ml-5 mr-3 pl-5"><strong>+/-</strong></li>
          <li className="col-md-3 ml-3 text-right"><strong>Price today</strong></li>
        </ul>
      </div>

            <div className="row">
                {marketsCompaniesList && (
                    Object.entries(marketsCompaniesList).map(marketsCompaniesItem => {
                    const key = marketsCompaniesItem[0]
                    const value = marketsCompaniesItem[1]
                    return (
                        <MarketsCompaniesItem key={key} marketsCompanies={value} />
                    )
                }))}
            </div>

        </div>
    )
}
// });
// }
