import "./App.css";
import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowAllUsers from './components/showuserlist.js';
import ShowOneUser from './components/showoneuser.js';
import CreateNewUser from './components/createnewuser.js';
import EditOneUser from './components/editoneuser.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={ShowAllUsers}/>
          <Route path="/one-user/:id" component={ShowOneUser}/>
          <Route path="/create-user" component={CreateNewUser} />
          <Route path="/edit-user/:id" component={EditOneUser} />
        </Router>
      </div>
    )
  }
};