import React, { Component } from "react";

export default class EditOneUser extends Component {
    constructor(props){
        super(props);
        console.log(this.props.match.params.id)
        this.state = {
            name: '',
            favoriteAnime: '',
            favoriteGame: ''
        }
    }

    componentDidMount() {
        this.fetchedUserGet();
    }

    fetchedUserGet = () => {
        fetch('/api/users/'+this.props.match.params.id)
        .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        name: data.name,
                        favoriteAnime: data.favoriteAnime,
                        favoriteGame: data.favoriteGame
                     })
                    console.log(data)
                }).catch(error => {
                    console.log("error in displaying users!")
                });
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const UpdatedUser = {
            name: this.state.name,
                favoriteAnime: this.state.favoriteAnime,
                favoriteGame: this.state.favoriteGame
        }
        
        fetch('/api/users/'+this.props.match.params.id, UpdatedUser, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'},
            body: JSON.stringify(UpdatedUser)
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    favoriteAnime: data.favoriteAnime,
                    favoriteGame: data.favoriteGame
                })
                this.props.history.push('/one-user/'+this.props.match.params.id)
        })
        .then(data => console.log(data))
        .catch(error => {
            console.log("error in editing user!")
        });
    }


    render() {
        return (
            <div className="user-list">
                <div className="createNewUser">

                    <h2 className="text-title">Edit Yourself Here &#10048;</h2>

                    <div className="text-center">
                    <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">
                                <a href="/">&hearts; Go Back to Our Bae List &hearts;</a>
                            </button>
                    </div>
                    <br />

                    <form className="text-center" onSubmit={this.onSubmit}>
                        <div className="form mb-4 row justify-content-center">
                            <input type="text" 
                            placeholder="Name" 
                            name="name" 
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChange} />
                        </div>

                        <div className="form mb-4 row justify-content-center">
                            <input type="text" 
                            placeholder="Favorite Anime" 
                            name="favoriteAnime" 
                            className="form-control"
                            value={this.state.favoriteAnime}
                            onChange={this.onChange} />
                        </div>

                        <div className="form mb-4 row justify-content-center">
                            <input type="text" 
                            placeholder="Favorite Game" 
                            name="favoriteGame" 
                            className="form-control"
                            value={this.state.favoriteGame}
                            onChange={this.onChange} />
                        </div>

                        <button type="submit" className="btn btn-light" data-mdb-ripple-color="dark">Update Me &#10048;</button>
                    </form>

                    </div>
            </div>
        )
    }
}