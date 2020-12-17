import React, { useState, useEffect } from 'react';
import CryptoItem from '../components/CryptoItem';

export default function CryptoListPage() {
  const [cryptoList, setCryptoList] = useState(null);

  useEffect(() => {
    const url = "https://market-data-collector.firebaseio.com/market-collector/crypto/usd.json"
    fetch(url)
      .then(res => res.json())
      .then(data => setCryptoList(data))
  }, [])


  return (
    <div className="light-green">
      <div className="container pt-5 pb-5">

        {!cryptoList && <p>Loading</p>}

        <div className="row">
          {cryptoList && Object.entries(cryptoList).map(cryptoItem => {
            const key = cryptoItem[0]
            const value = cryptoItem[1]

            return (

              <CryptoItem key={key} crypto={value} />
            )

          })}
        </div>

      </div>
    </div>
  );
}
