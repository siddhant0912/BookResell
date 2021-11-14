import React, {useEffect, Fragment} from 'react'
import './App.css';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import store from './store';
import Landing  from './Screens/Landing';
import NavBar from './Components/NavBar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Alert from './Components/Alert';
import SetAuthToken from './Utils/SetAuthToken';
import { loadUser } from './Actions/Auth';
import BookScreen from './Screens/BookScreen';
import SearchScreen from './Screens/SearchScreen';
import UserProfile from './Screens/UserProfile';
import PrivateRoute from './Components/Routes/PrivateRoute';
import BookForm from './Components/Books/BookForm';
import Owner from './Components/Owner/Owner';
import MyBooks from './Screens/MyBooks';
import SingleBook from './Components/Books/SingleBook';
if(localStorage.token){
  SetAuthToken(localStorage.token)
}

const  App= () => {
  useEffect(() =>{
    store.dispatch(loadUser())
  },[])
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar/>
        <Route exact path='/' component={Landing} />
        <section className="container" >
            <Alert/>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/books" component={BookScreen}/>
              <Route exact path="/search" component={SearchScreen}/>
              <Route exact path="/profile/me" component={UserProfile}/>
              <Route exact path="/books/:id" component={SingleBook}/> 
              <Route exact path= "/owner-info" component={Owner} />
              <PrivateRoute exact path="/add-book" component={BookForm}/>
              <PrivateRoute exact path="/me/books" component={MyBooks} />
            </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
   
  );
}

export default App;
