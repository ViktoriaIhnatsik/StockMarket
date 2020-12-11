import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavLinkItem from './components/NavLinkItem'
import CryptoDetailPage from './pages/CryptoDetailPage'
import CryptoListPage from './pages/CryptoListPage'
import CurrenciesListPage from './pages/CurrenciesListPage'
import IndexesListPage from './pages/IndexesListPage'
import MarketsListPage from './pages/MarketsListPage'


function App() {
  return (
    <div className="container">
      <div className="col-md-12">
        <ul className="nav">
          <NavLinkItem to="/crypto" text="Crypto"/>
          <NavLinkItem to="/currencies" text="Currencies"/>
          <NavLinkItem to="/indexes" text="Indexes"/>
          <NavLinkItem to="/markets" text="Markets"/>

        </ul>
      </div>

      <Switch>
        <Route path="/crypto/:id"  component={CryptoDetailPage}></Route>

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
