import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User/User';
import { authenticate } from './store/session';
import HomePage from './components/HomePage/HomePage';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemListing from './components/ItemListing/ItemListing';
import ItemEdit from './components/ItemListing/ItemEdit';
import DeadEnd from './components/404Page/DeadEnd';
import Footer from './components/FooterPage/Footer'
//import './App.css';
import EditProfile from './components/User/EditUser';
//import './App.css';
import Cart from './components/Cart/Cart';
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path='/' exact={true} >
          <HomePage/>
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <ProtectedRoute path='/users/:userId/edit' exact={true}>
          <EditProfile />
        </ProtectedRoute>
        <Route path='/items/:itemId' exact={true}>
          <ItemDetail/>
        </Route>
        <ProtectedRoute path='/items/:itemId/edit' exact={true}>
          <ItemEdit/>
        </ProtectedRoute>
        <ProtectedRoute path='/sell' exact={true}>
          <ItemListing/>
        </ProtectedRoute>
        <ProtectedRoute path='/cart' exact={true}>
          <Cart/>
        </ProtectedRoute>
        <Route >
          <DeadEnd/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
