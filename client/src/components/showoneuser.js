import React from "react";
import {Link} from 'react-router-dom';

class ShowOneUser extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            user: {}
        };
    }

    componentDidMount(){
        this.fetchOneUser();
        console.log(this.props.match && this.props.match.params.id);

    }
    fetchOneUser = () => {
        fetch('/api/users/'+this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ user: data })
                console.log(data)
            }).catch(error => {
                console.log("error in displaying user!" + error)
            });
    }


    onDelete(id) {
        const deletedUser = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch('/api/users/'+ id, deletedUser)
        .then(() => 
            this.props.history.push('/'),
            console.log('removed'))
        .catch(err => {
            console.log('error in deleting user')
        })
    }

    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
            this.fetchOneUser(this.props.id);
            console.log(prevProps);
        }
    }


    render() {
        const user = this.state.user;
                   let OneUserCard = <div className="container">
                    <div className="col">
                        <div className="p-1">
                            <div className="card text-center text-white bg-dark">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h2 className="card-text">meet our featured bae: {user.name}</h2>
                                    </div>
                                    <h6 className="card-text">their favorite anime is: {user.favoriteAnime}</h6>
                                    <h6 className="card-text">their favorite game is: {user.favoriteGame}</h6>
                                
                                    <br />
                                    <div id="button-addition">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                                        <a href="/">&hearts; Go Back to Bae List &hearts;</a>
                                    </button>
                                    </div>
        
                                    <div id="button-addition">
                                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark"
                                    >
                                       <Link className="edit-link" to={"/edit-user/" + this.props.match.params.id}>&hearts; Edit This Bae &hearts;</Link>
                                    </button>
                                    </div>
        
                                    <div id="button-addition">
                                        <button type="button" className="btn btn-light" data-mdb-ripple-color="dark" 
                                        onClick={this.onDelete.bind(this, this.props.match.params.id)}>
                                        &hearts; delete this bae &hearts;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        return (
            <div className="user-list">
                <h2 className="text-title">meet the bae's &#10048;</h2>
                <div>{OneUserCard}</div>
            </div>
        )
    }
}

export default ShowOneUser;