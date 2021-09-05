import React, { Component } from 'react';
import '../src/App.css';
import Merchants from './routes/merchants/merchants';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


function App() {
  return (

    
    <React.Fragment>
       <Navbar/>
        <Switch>
            <Route path="/" Component={ProductList}>
            
            </Route>
          </Switch>
       <ProductList/>
       <Details/>
       <Cart/>
      <Default/>

      
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link exact='true' to="/merchants">Become a Merchant</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/merchants">
              <Merchants/>
            </Route>
          </Switch>

        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
