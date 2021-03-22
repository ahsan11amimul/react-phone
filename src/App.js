import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ProductList}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/details' component={Details}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />

      </Router>
    </>
  );
}

export default App;
