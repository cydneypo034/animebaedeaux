import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowAllUsers from './components/showuserlist.js';
import ShowOneUser from './components/showoneuser.js';
import CreateNewUser from './components/createnewuser.js';
import EditOneUser from './components/editoneuser.js';

class App extends React.Component {
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

export default App;