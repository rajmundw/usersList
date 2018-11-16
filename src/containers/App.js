import React, { Component } from 'react';
import './App.css';
import UsersList from './usersList/UsersList'
import AddingUserContainer from './addingUserContainer/AddingUserContainer'
import UsersListHeader from '../components/header/usersListHeader'
import MenuHeader from '../components/header/menuHeader'
import AddUserHeader from '../components/header/addUserHeader'
import Menu from '../components/menu/menu'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        //Routing
        <BrowserRouter>
          <div className="App">
              {/*main site, rendering menu*/}
              <Route exact path='/' component={MenuHeader} />
              <Route exact path='/' component={Menu} />
              {/*users list site, rendering users and giving posilility to delete and change users*/}
              <Route path='/UsersList' component={UsersListHeader} />
              <Route path='/UsersList' component={UsersList} />
              {/*site where we can add users*/}
              <Route path='/AddUser' component={AddUserHeader} />
              <Route path='/AddUser' component={AddingUserContainer} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App
