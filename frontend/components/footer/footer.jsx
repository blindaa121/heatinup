import React from 'react';
import { Link } from 'react-router-dom';

const SHOP_LINKS = [
    { to: '/sneakers', label: 'All Sneakers' },
    { to: '/collections/thelastdance', label: 'The Last Dance' },
    { to: '/collections/fog', label: 'Fear of God' },
    { to: '/collections/offwhite', label: 'Off-White' },
];

const ABOUT_LINKS = [
    { to: '/styles', label: 'Styles' },
];

const SOCIAL_LINKS = [
    { href: 'https://bryanlinda.com', label: 'Portfolio' },
    { href: 'https://www.linkedin.com/in/bryan-linda-44389794/', label: 'LinkedIn' },
    { href: 'https://github.com/blindaa121/heatinup', label: 'GitHub' },
];

const Footer = () => (
    <footer className="footer">
        <div className="footer__inner">
            <div className="footer__brand">
                <span className="footer__brand-name">HEAT</span>
                <p className="footer__tagline">Authenticated sneakers, straight heat.</p>
            </div>

            <div className="footer__cols">
                <div className="footer__col">
                    <h4 className="footer__col-title">Shop</h4>
                    {SHOP_LINKS.map((link) => (
                        <Link key={link.to} to={link.to} className="footer__link">{link.label}</Link>
                    ))}
                </div>
                <div className="footer__col">
                    <h4 className="footer__col-title">About</h4>
                    {ABOUT_LINKS.map((link) => (
                        <Link key={link.to} to={link.to} className="footer__link">{link.label}</Link>
                    ))}
                </div>
                <div className="footer__col">
                    <h4 className="footer__col-title">Connect</h4>
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.href}
                            className="footer__link"
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className="footer__bar">
            <span>&copy; {new Date().getFullYear()} HEAT</span>
            <span>Built with React + Rails.</span>
        </div>
    </footer>
);

export default Footer;
