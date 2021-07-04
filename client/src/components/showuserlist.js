import React, { Component } from "react";
import UserCard from './usercard';
import '../App.css';

export default class ShowUserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    isLoaded: true,
                    users: data })
                console.log(data)
                //window.location.reload();
            }).catch(error => {
                console.log("error in displaying users!")
            });
    }


    render() {
        const users = this.state.users;
        let userList;

        userList = users.map((user, key) => 
            <UserCard user={user} key={key} />
        ); 


        return (
            <div className="user-list">
                <h2 className="text-title">&#10048; Anime Bae &#10048;</h2>

                <div className="text-center">
                <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                            <a href="/create-user">&hearts; Add Yourself to Our Bae List &hearts;</a>
                        </button>
                </div>
                <div className="card-wrapper">{userList}</div>
            </div>
        )
    }
}