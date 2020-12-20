import React, { useState, useEffect } from 'react';
import MarketsItem from '../components/MarketsItem';


export default function MarketsListPage() {
  const [marketsList, setMarketsList] = useState(null)

  useEffect(() => {
    const url = "https://market-data-collector.firebaseio.com/market-collector/markets.json"

    fetch(url)
      .then(res => res.json())
      .then(data => setMarketsList(data))

  }, [])

  return (
    <div className="vh-100">
      <div className="container pt-5 pb-5">

        {!marketsList && <p>Loading</p>}
        <div className="row">
        <ul className="col-md-10 mw-100 list-inline mx-auto align-items-center lightgray p-3 d-flex justify-content-center">
          <li className="col-md-2 mr-1 text-left pr-5"><strong>Markets</strong></li>
          </ul>
          </div>

        <div className="row justify-content-center">

          {marketsList && (
            
            Object.entries(marketsList).map(marketsItem => {
            const key = marketsItem[0]
            const name = marketsItem[0]

            return (

              <MarketsItem key={key} markets={name} />
            )
          }))}
        </div>

      </div>
    </div>
  );
}
