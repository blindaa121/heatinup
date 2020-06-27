import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default ({ currentUser, logout }) => {
    const loggedOutNav = () => (
        <div className='loggedOut-navbar'>
            <div>
                <Link className="logo" to="/">H E A T</Link>
            </div>
            <div className='links'>
                <NavLink exact activeStyle={{ textDecoration: 'underline', color: 'black' }} className="sneakers" to="/">Discover</NavLink>
                <NavLink activeStyle={{ textDecoration: 'underline', color: 'black' }} className="styles" to="/styles">Styles</NavLink>
                <NavLink activeStyle={{ textDecoration: 'underline', color: 'black' }} className="signup" to="/signup">Sign Up</NavLink>
                <NavLink activeStyle={{ textDecoration: 'underline', color: 'black' }} className="login" to="/login">Log In</NavLink>
                <NavLink activeStyle={{ textDecoration: 'underline', color: 'black' }} to="/sneakers"><i className="fas fa-search nav-search"></i></NavLink>
            </div>
        </div>
    )

    const loggedInNav = () => (
        <div className='loggedIn-navbar'>
            <div>
                <Link className="logo" to="/">H E A T</Link>
            </div>
            <div className='links'>
                <NavLink exact activeStyle={{ textDecoration: 'underline', color: 'black' }} className="sneakers" to="/">Discover</NavLink>
                <NavLink activeStyle={{ textDecoration: 'underline', color: 'black' }} className="styles" to="/styles">Styles</NavLink>
                <button className="logout" onClick={logout}><a>Logout</a></button>
                <a className='cart-icon' href="#/cart"><i className="fas fa-shopping-cart"></i></a>
                <a className='nav-search' href="#/sneakers"><i className="fas fa-search"></i></a>
            </div>
        </div>
    )

    return currentUser ? loggedInNav() : loggedOutNav()
}


