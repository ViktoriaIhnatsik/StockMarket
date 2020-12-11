import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CryptoListPage from './pages/CryptoListPage'
import CurrenciesListPage from './pages/CurrenciesListPage'
import IndexesListPage from './pages/IndexesListPage'
import MarketsListPage from './pages/MarketsListPage'


function App() {
  return (
    <div>
      <h1>Market Landing Page</h1>
      <Switch>
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
