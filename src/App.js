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
        <Route path='/EasyBank-Landing-Page/' exact component={Home} />
        <Route path='/EasyBank-Landing-Page/contact' exact component={Contact} />
        <Route path='/EasyBank-Landing-Page/' component={FError} />
      </Switch>
      <Footer/>
    </Router>
  );
}
  
export default App;