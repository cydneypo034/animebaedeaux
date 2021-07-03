import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class ShowOneUser extends Component {

    constructor(props){
        super(props);
        console.log(this.props.match.params.id)
        this.state = {
            user: {}
        };
    }

    componentDidMount(){
        this.fetchOneUser();
    }

    fetchOneUser = () => {
        fetch('/api/users/'+this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data })
                console.log(data)
            }).catch(error => {
                console.log("error in displaying user!")
            });
    }

    /*
    onDelete(id) {
        fetch('/api/users/'+ id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        })
        .then(res => {
            return res.json()
        })
        .then(data => 
            console.log(data))
            this.props.history.push('/')
    }
    */

    render() {
        //const thisUser = this.state.user;
        let OnlyUser = <div className="container">
            <div className="col">
                <div className="p-1">
                    <div className="card text-center text-white bg-dark">
                        <div className="card-body">
                            <div className="card-title">
                                <h2 className="card-text">meet our featured bae: {this.props.match.params.name}</h2>
                            </div>
                            <h6 className="card-text">their favorite anime is: {this.props.match.params.favoriteAnime}</h6>
                            <h6 className="card-text">their favorite game is: {this.props.match.params.favoriteGame}</h6>
                        <br />
                        <div id="button-addition">
                        <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                            <a href="/">&hearts; Go Back to Bae List &hearts;</a>
                        </button>
                        </div>

                        <div id="button-addition">
                        <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                            <Link to={`/edit-user/${this.props.match.params.id}`}>&hearts; Edit This Bae &hearts;</Link>
                        </button>
                        </div>

                        <div id="button-addition">
                            <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                                delete this bae
                            </button>
                        </div>
                        
                        
                        
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        return (
            <div className="user-list">
                <h2 className="text-title">meet the bae's</h2>
                <div>
                    {OnlyUser}
                </div>
            </div>
        )
    }
}