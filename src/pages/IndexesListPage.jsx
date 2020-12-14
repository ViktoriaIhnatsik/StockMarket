import React, { useState, useEffect } from 'react';
import IndexesItem from '../components/IndexesItem';



export default function IndexesListPage() {

  const [indexesList, setIndexesList] = useState(null)

  useEffect(() => {
    const url = "https://market-data-collector.firebaseio.com/market-collector/indexes/se.json"
    fetch(url)
      .then(res => res.json())
      .then(data => setIndexesList(data))

  }, [])

  return (
    <div className="text-left">
      <h2>IndexesListPage</h2>
      {!indexesList && <p>Loading</p>}
      <ul className="col-md-6 mt-5 mb-4 list-inline d-flex justify-content-between">
        <li className="list-inline-item"><strong>Index</strong></li>
        <li className="list-inline-item"><strong>+/-</strong></li>
        <li className="list-inline-item"><strong>Price today</strong></li>
      </ul>
      <div className=" row align-items-center ">
      <div className="col  align-self-center vertical-align-middle">

        {indexesList && (


          Object.entries(indexesList).map(indexesItem => {
            const key = indexesItem[0]
            const value = indexesItem[1]

            return (
              <IndexesItem key={key} indexes={value} />
            )

          }))}
      </div>
      </div>
    </div>
  );
}
