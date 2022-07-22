import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import NewsItems from './components/NewsItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar></NavBar>
        
        
         <News pageSize={8} country="in" category="sports"></News>
          
         </Router>
         
          
       
      </div>
    )
  }
}
