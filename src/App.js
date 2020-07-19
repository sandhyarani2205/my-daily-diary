// @ts-nocheck
import React from 'react';
import './App.css';
import Header from './header/header.component';
import DiaryCreation from './create-diary/create-diary.component';
import { Switch, Route } from 'react-router-dom';
import DiaryView from './view-diary/view-diary.component';
import SignInSignUpPage from './auth/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser: null
  };
}


unSubscribeFromAuth = null;
componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        }, ()=> console.log(this.state));
      });
    }
    this.setState({ currentUser: userAuth });
  });
  // this.unsubscribeFromAuth = auth.onAuthStateChanged( async user =>{
  //   this.setState({currentUser: user})
  //   createUserProfileDocument(user);
  //   console.log(user);
  // })
}

componentWillUnmount(){
  this.unSubscribeFromAuth();
}

render(){
  return(
    <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
          <Route exact path = '/' component={DiaryView} />
          <Route path = '/create' component={DiaryCreation} />
          <Route path = '/signin' component = {SignInSignUpPage} />
        </Switch>
    </div>
  )
}
}

export default App;
