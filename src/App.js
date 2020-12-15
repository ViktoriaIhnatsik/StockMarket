import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'

import CryptoListPage from './pages/CryptoListPage'
import CryptoDetailPage from './pages/CryptoDetailPage'

import CurrenciesListPage from './pages/CurrenciesListPage'
import CurrenciesDetailPage from './pages/CurrenciesDetailPage'

import MarketsCompaniesListPage from './pages/MarketsCompaniesListPage'

import MarketsListPage from './pages/MarketsListPage'
import MarketsCompaniesDetailPage from './pages/MarketsCompaniesDetailPage'

import IndexesListPage from './pages/IndexesListPage'
import IndexesDetailPage from './pages/IndexesDetailPage'

import './styles/background.css'



function App() {
  return (
    <div className="container" >
      <div className="col-md-12">
        <ul className="nav">
          <NavLinkItem to="/crypto" text="Crypto" />
          <NavLinkItem to="/currencies" text="Currencies" />
          <NavLinkItem to="/indexes" text="Indexes" />
          <NavLinkItem to="/markets" text="Markets" />
        </ul>
      </div>

      <Switch>
        <Route path="/crypto/:id" component={CryptoDetailPage}></Route>
        <Route path="/currencies/:id" component={CurrenciesDetailPage}></Route>
        <Route path="/indexes/:id" component={IndexesDetailPage}></Route>
        <Route path="/markets/:companies/:id" component={MarketsCompaniesDetailPage}></Route>
        <Route path="/markets/:companies" component={MarketsCompaniesListPage}></Route>

        <Route path="/crypto">
          <CryptoListPage />
        </Route>

        <Route path="/currencies">
          <CurrenciesListPage />
        </Route>

        <Route path="/indexes">
          <IndexesListPage />
        </Route>

        <Route path="/markets">
          <MarketsListPage />
        </Route>


      </Switch>
        </div>
  );
}

export default App;
