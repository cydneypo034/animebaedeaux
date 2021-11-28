import "./App.css";
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowAllUsers from './components/showuserlist.js';
import ShowOneUser from './components/showoneuser.js';
import CreateNewUser from './components/createnewuser.js';
import EditOneUser from './components/editoneuser.js';

export default class App extends Component {
  render() {
    return (
      <div className="app">
          <Routes>
            <Route exact path="/" element={<ShowAllUsers/>}/>
            <Route path="/one-user/:id" element={<ShowOneUser/>}/>
            <Route path="/create-user" element={<CreateNewUser/>} />
            <Route path="/edit-user/:id" element={<EditOneUser/>} />
          </Routes>
      </div>
    )
  }
};