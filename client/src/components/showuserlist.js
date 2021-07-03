import React, { Component } from "react";

export default class ShowUserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data })
                console.log(data)
            }).catch(error => {
                console.log("error in displaying users!")
            });
    }


    render() {
        const users = this.state.users;
        let userList;

        


        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}