import React, { useState, useEffect } from 'react';

export default function CryptoListPage() {
  const [cryptoList, setCryptoList] = useState(null);

  useEffect(() => {
    const url = "https://market-data-collector.firebaseio.com/market-collector/crypto.json"
    fetch(url)
      .then(res => res.json())
      .then(data => setCryptoList(data))
  }, [])


  return (
    <div>
      <h2>CryptoListPage</h2>
      {!cryptoList && <p>Loading</p>}
      {cryptoList && Object.entries(cryptoList).map(cryptoItem => {
        console.log(cryptoItem[1])
      })}
    </div>
  );
}
