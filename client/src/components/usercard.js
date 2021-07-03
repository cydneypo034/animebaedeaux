import React from "react";
import {Link} from 'react-router-dom';

const UserCard = (props) => {
    const user = props.user;

        return (
            <div className="container px-1" style={{ width: "23rem", height: "18rem"}}>
                <div className="col">
                    <div className="p-1">

                        <div className="card text-center text-white bg-dark">
                            <div className="card-body">
                                <h5 className="card-text">
                                    <Link to={`/one-user/${user._id}`} style={{ color: 'white', textDecoration: 'none' }}>name: {user.name}</Link>
                                </h5>
                                <div className="card-text"> favorite anime: {user.favoriteAnime} </div>
                                <div className="card-text"> favorite game: {user.favoriteGame} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default UserCard;