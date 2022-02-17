//import logo from './logo.svg';
import './App.css';
import Nav from './componentes/Nav';

import { BrowserRouter as Router } from "react-router-dom";
//import { Switch, Route } from "react-router-dom";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './componentes/Home'
import Tweet from './componentes/Tweet'




function App() {
  return (
   <Router>
    <div className="App">
      <header className="App-header">
       <Nav />
       <div>
      
       <Routes>
           <Route path='/home'  element={<Home/>}/>
           <Route  path='/tweet'  element={<Tweet/>}/>
           < Route to="/tweets"  element={<Home/>}/>
       </Routes>
       </div>
      </header>
    </div>
    </Router>

  );
}

export default App;
