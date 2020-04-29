import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div className="nav-bar-links">
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
        );
        return (
            <header className="nav-bar">
            <Link className="logo" to="/">H E A T</Link>
            {console.log(currentUser)}
            {/* styles link here */}
            {/* collections */}
            {/* cart link here*/}
            <div>
                {display}
            </div>
        </header>
    )
}

