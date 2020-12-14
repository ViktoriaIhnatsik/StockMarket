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
    <div className="container">
      <h2>MarketsListPage</h2>

      {!marketsList && <p>Loading</p>}
      <div className="row p-5">
         {marketsList && Object.entries(marketsList).map(marketsItem => {
        const key = marketsItem[0]
        const name = marketsItem[0]

        return (
          <MarketsItem key={key} markets={name} />
        )
      })}

      </div>

     

    </div>
  );
}
