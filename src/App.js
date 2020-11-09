import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useStateValue } from './StateProvider';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';

//set a listener to Firebase so that our React app knows that user is authenticated. Just add this useEffect block in App.js
//setup the React app if the user is Authenticated, and update the state in the reducer.

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('[USER] ', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      <ToastContainer style={{ marginTop: '45px' }} />
    </Router>
  );
}

export default App;
