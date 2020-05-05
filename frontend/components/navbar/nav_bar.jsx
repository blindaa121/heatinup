import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const loggedOutNav = () => (
        <div className='loggedOut-navbar'>
            <div>
                <Link className="logo" to="/">H E A T</Link>
            </div>
            <div className='links'>
                <Link className="sneakers" to="/">Sneakers</Link>
                <Link className="shopall" to="/sneakers">Shop All</Link>
                <Link className="styles" to="/styles">Styles</Link>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="login" to="/login">Log In</Link>
            </div>
        </div>
    )

    const loggedInNav = () => (
        <div className='loggedIn-navbar'>

            <div>
                <Link className="logo" to="/">H E A T</Link>
            </div>

            <div className='links'>
                <Link className='sneakers' to="/">Sneakers</Link>
                <Link className='shopall'to="/sneakers">Shop All</Link>
                <Link className='styles' to="/styles">Styles</Link>
                <button className="logout" onClick={logout}><a>Logout</a></button>
            </div>
        </div>
    )

    return currentUser ? loggedInNav() : loggedOutNav()
}


