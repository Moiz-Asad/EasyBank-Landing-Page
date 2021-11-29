import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import FError from './Pages/FError.js';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={FError} />
      </Switch>
      <Footer/>
    </Router>
  );
}
  
export default App;