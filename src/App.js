import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectCartHidden} from './redux/cart/cart.selectors';
import {selectCurrentUser} from './redux/user/user.selectors';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  /*constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }*/

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser: user});
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          /*this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })*/
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      //this.setState({currentUser: userAuth});
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
          </Switch>
        </div>
      );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);