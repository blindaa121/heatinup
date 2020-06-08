import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const loggedOutNav = () => (
        <div className='loggedOut-navbar'>
            <div>
                <Link className="logo" to="/">H E A T</Link>
            </div>
            <div className='links'>
                <Link className="sneakers" to="/">Discover</Link>
                <Link className="styles" to="/styles">Styles</Link>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="login" to="/login">Log In</Link>
                <a href="#/sneakers"><i className="fas fa-search nav-search"></i></a>
            </div>
        </div>
    )

    const loggedInNav = () => (
        <div className='loggedIn-navbar'>

            <div>
                <Link className="logo" to="/">H E A T</Link>
            </div>

            <div className='links'>
                <Link className='sneakers' to="/">Discover</Link>
                <Link className='styles' to="/styles">Styles</Link>
                <button className="logout" onClick={logout}><a>Logout</a></button>
                <a className='cart-icon' href="#/cart"><i className="fas fa-shopping-cart"></i></a>
                <a className='nav-search' href="#/sneakers"><i className="fas fa-search"></i></a>
            </div>
        </div>
    )

    return currentUser ? loggedInNav() : loggedOutNav()
}


