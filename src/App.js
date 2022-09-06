import './App.css';
import React, {useEffect} from 'react';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import {collection, getDocs} from 'firebase/firestore';
function App() {

  useEffect(() =>{
    
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
      </Switch>
    </Router>
  
  );
}

export default App;
