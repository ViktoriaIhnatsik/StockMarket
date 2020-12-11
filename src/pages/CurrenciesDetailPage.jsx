import React, {useEffect, useState} from 'react'

export default function CurrenciesDetailPage(props) {
  const [currenciesItem, setCurrenciesItem] = useState(null)
  
  useEffect( () => {
    const id = props.match.params.id
    const url = `https://market-data-collector.firebaseio.com/market-collector/currencies/sek/${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => setCurrenciesItem(data))
  }, [])

  return (
    <div>
      {!currenciesItem && <p>Loading</p>}
      {currenciesItem && (
        <div className="container shadow w-50 mt-5 ">
        <h2>{currenciesItem.name}</h2>
        <p>Market: {currenciesItem.market}</p>
        <p>Mtd: {currenciesItem.mtd}</p>
        <p>Price: {currenciesItem.price}</p>
        <p>Today: {currenciesItem.today}</p>
        <p>W1: {currenciesItem.w1}</p>
        <p>Y3: {currenciesItem.y3}</p>
        <p>Y5: {currenciesItem.y5}</p>
        <p>Ytd: {currenciesItem.ytd}</p>
        </div>
      )}
    </div>
  )
}
