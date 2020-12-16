import React, { useEffect, useState } from 'react';
import CurrenciesItem from '../components/CurrenciesItem';

export default function CurrenciesListPage() {
  const [currenciesList, setCurrenciesList] = useState(null)
  
  useEffect( () => {
    const url = "https://market-data-collector.firebaseio.com/market-collector/currencies/sek.json"
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrenciesList(data))
  }, [])
  return (
    <div className="container  rounded ">
      <h2 >CurrenciesListPage</h2>
      {!currenciesList && <p>Loading</p>}
      <div className="row  ">
        {currenciesList && Object.entries(currenciesList).map(currenciesItem =>{
          const key = currenciesItem[0];
          const value = currenciesItem[1];
          return <CurrenciesItem key={key} currencies={value} />
        })}
      </div>
    </div>
  );
}
