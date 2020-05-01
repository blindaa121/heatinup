import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <button className="logout" onClick={logout}><a>Logout</a></button>
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
            <div id="links"></div>
            <Link className="sneakers-bar" to="/">Sneakers</Link>
            <Link className="sneakers-bar" to="/sneakers">Shop All</Link>
            <div>
                {display}
            </div>
        </header>
    )
}

