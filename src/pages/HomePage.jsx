import React from "react";
import { Link } from "react-router-dom";
import { Hoover } from "../components/HooverStyle";
import stats from '../stats.png'
import bank from '../bank.png'
import bars from '../bars.png'
import money from '../money.png'



export default function HomePage() {
  return (
    <div className="vh-100">
      <div className="row justify-content-center mt-5 ">
        <h1 classname="">Stock market</h1>
      </div>

      <div className="container  col-md-12 text-center">

        <div className="row align-items-center justify-content-center h-60">

          <Hoover className="card col col-md-2 shadow m-1 p-1">
            <Link to="/crypto" className="text-reset text-decoration-none">
              <div className="card-body card-text-center">
                <img className="img-fluid w-25" src={bank} alt="this is an img" />
                <p className="font-weight-bold mt-2">Crypto</p>
              </div>
            </Link>
          </Hoover>

          <Hoover className="card col col-md-2 shadow m-1 p-1">
            <Link to="/currencies" className="text-reset text-decoration-none">
              <div className="card-body">
                <img className="img-fluid w-25" src={bars} alt="this is an img" />
                <p className="font-weight-bold mt-2">Currencies</p>
              </div>
            </Link>
          </Hoover>

          <Hoover className="card col col-md-2 shadow m-1 p-1">
            <Link to="/indexes" className="text-reset text-decoration-none">
              <div className="card-body">
                <img className="img-fluid w-25" src={stats} alt="this is an img" />
                <p className="font-weight-bold mt-2">Indexes</p>
              </div>
            </Link>
          </Hoover>

          <Hoover className="card col col-md-2 shadow m-1 p-1">
            <Link to="/markets" className="text-reset text-decoration-none">
              <div className="card-body">
                <img className="img-fluid w-25" src={money} alt="this is an img" />
                <p className="font-weight-bold mt-2">Markets</p>
              </div>
            </Link>
          </Hoover>
        </div>
      </div>
    </div>
  );
}
