import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Carrier from './Pages/Carrier';
import Contact from './Pages/Contact';
import FError from './Pages/FError.js';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
        <Route path='/carrier' component={Carrier} />
        <Route path='/' component={FError} />
      </Switch>
      <Footer/>
    </Router>
  );
}
  
export default App;