import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => (
    <header className="nav">
        <div className="nav__inner">
            <Link to="/" className="nav__brand">HEAT</Link>

            <nav className="nav__links" aria-label="Primary">
                <NavLink exact className="nav__link" activeClassName="nav__link--active" to="/">
                    Home
                </NavLink>
                <NavLink className="nav__link" activeClassName="nav__link--active" to="/sneakers">
                    Shop All
                </NavLink>
                <NavLink className="nav__link" activeClassName="nav__link--active" to="/styles">
                    Styles
                </NavLink>
            </nav>

            <div className="nav__actions">
                <Link to="/sneakers" className="nav__icon" aria-label="Search">
                    <i className="fas fa-search" />
                </Link>

                {currentUser ? (
                    <React.Fragment>
                        <Link to="/cart" className="nav__icon" aria-label="Cart">
                            <i className="fas fa-shopping-bag" />
                        </Link>
                        <button type="button" className="nav__btn" onClick={logout}>
                            Sign Out
                        </button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <NavLink className="nav__btn" to="/login">Sign In</NavLink>
                        <NavLink className="nav__btn nav__btn--primary" to="/signup">Sign Up</NavLink>
                    </React.Fragment>
                )}
            </div>
        </div>
    </header>
);

export default NavBar;
