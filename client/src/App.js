import "./App.css";
import React from 'react';
import { BrowserRouter as Routes, Route, withRouter } from 'react-router-dom';
import ShowAllUsers from './components/showuserlist.js';
import ShowOneUser from './components/showoneuser.js';
import CreateNewUser from './components/createnewuser.js';
import EditOneUser from './components/editoneuser.js';

class App extends React.Component {
  render() {
    return (
      <div className="app">
          <Routes>
            <Route path="/" element={<ShowAllUsers/>}/>
            <Route path="/one-user/:id" element={<ShowOneUser/>}/>
            <Route path="/create-user" element={<CreateNewUser/>} />
            <Route path="/edit-user/:id" element={<EditOneUser/>} />
          </Routes>
      </div>
    )
  }
};

export default withRouter(App);