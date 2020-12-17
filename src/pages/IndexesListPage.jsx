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
    <div className="mt-5 bg-light">

      {!indexesList && <p>Loading</p>}
      <div className="row">
        <ul className="col-md-10 mw-100 list-inline mx-auto align-items-center lightgray p-3 d-flex justify-content-center">
          <li className="col-md-3 mr-3 text-left"><strong>Index</strong></li>
          <li className="col-md-3 ml-5 mr-3"><strong>+/-</strong></li>
          <li className="col-md-3 ml-3 text-right"><strong>Price today</strong></li>
        </ul>
      </div>
      <div className="row">
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
  );
}