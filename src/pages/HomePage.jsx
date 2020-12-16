import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container vh-100 col-md-6 mt-5 text-center">
      <div className="row m-5 p-5 justify-content-center">
        <h1 classname="">Stock market</h1>
      </div>
      <div className="row align-items-center">
        <div className="card col shadow m-1 p-1">
          <div className="card-body card-text-center">
            <Link to="/crypto">Crypto</Link>
          </div>
        </div>
        <div className="card col shadow m-1 p-1">
          <div className="card-body">
            <Link to="/currencies">Currencies</Link>
          </div>
        </div>
        <div className="card col shadow m-1 p-1">
          <div className="card-body">
            <Link to="/indexes">Indexes</Link>
          </div>
        </div>
        <div className="card col shadow m-1 p-1">
          <div className="card-body">
            <Link to="/markets">Markets</Link>
          </div>
        </div>
      </div>
      <div classname="d-flex align-items-end">
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            © 2020 Copyright: Group 5
          </div>
        </footer>
      </div>
    </div>
  );
}
