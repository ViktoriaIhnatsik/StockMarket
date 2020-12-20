import React from 'react'
import { Link } from 'react-router-dom'
import { Hoover } from "../components/HooverStyle";

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
export default function MarketsItem({ markets }) {

  let newMarkets
  
    Object.entries(marketObject).forEach(([keyMarket, valueMarket]) => { //loop through keys array
      if (keyMarket === markets) {
        newMarkets = valueMarket
      }
    });

  return (
    <div className="col-md-10 mx-auto mw-100 p-0 m-0 row-striped">
    <Hoover className="col-md-12 shadow rounded pr-5 mr-3">
      <Link
          className="btn btn-block p-0"
            to={`/markets/${markets}`}>
          <ul className="col-md-12 mw-100 list-inline d-flex align-content-left p-0 m-0">
            <li className="col-md-12">
              <p>{newMarkets}</p>
            </li>
          </ul>
      </Link>
    </Hoover>
    </div>
 )
}