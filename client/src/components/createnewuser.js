import React, { Component } from "react";

export default class CreateNewUser extends Component {
    
    constructor(){
        super();
        this.state = {
            name: '',
            favoriteAnime: '',
            favoriteGame: ''
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            name: this.state.name,
            favoriteAnime: this.state.favoriteAnime,
            favoriteGame: this.state.favoriteGame
        }

        fetch('https://animebae.onrender.com/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
        })
        .then(res => {
            this.setState({
                name: '',
                favoriteAnime: '',
                favoriteGame: ''
            })
            this.props.history.push('/')
        })
        .then(data => console.log(data))
    }
    render() {
        return (
            <div className="createuser-list">

                <h2 className="text-title">Add Yourself Here &#10048;</h2>

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

                    <button type="submit" className="btn btn-light" data-mdb-ripple-color="dark">Add Me &#10048;</button>
                </form>

            </div>
        )
    }
}