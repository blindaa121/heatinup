import React from 'react';
import { Link } from 'react-router-dom';

const COLLECTIONS = [
    {
        title: 'The Last Dance',
        sub: 'Air Jordan retros',
        to: '/collections/thelastdance',
        imgKey: 'splashURL',
    },
    {
        title: 'Fear of God',
        sub: 'The cult favorite',
        to: '/collections/fog',
        imgKey: 'splashFOG',
    },
    {
        title: 'Off-White',
        sub: 'Deconstructed icons',
        to: '/collections/offwhite',
        imgKey: 'splashTEN',
    },
];

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchSneakers();
        window.scrollTo(0, 0);
    }

    render() {
        const { sneakers } = this.props;
        const justDropped = (sneakers || []).slice(0, 8);

        return (
            <div className="splash">
                <section className="hero">
                    <img className="hero__media" src={window.splashURL} alt="" />
                    <div className="hero__overlay" />
                    <div className="hero__content">
                        <p className="hero__eyebrow">New &amp; Trending</p>
                        <h1 className="hero__title">
                            Authenticated heat.
                            <br />
                            Straight from the source.
                        </h1>
                        <Link to="/sneakers" className="hero__cta">Shop All</Link>
                    </div>
                </section>

                <section className="section">
                    <header className="section__head">
                        <h2 className="section__title">Collections</h2>
                        <Link to="/sneakers" className="section__link">View all</Link>
                    </header>
                    <div className="collections-grid">
                        {COLLECTIONS.map((c) => (
                            <Link key={c.title} to={c.to} className="collection-tile">
                                <div className="collection-tile__media">
                                    <img src={window[c.imgKey]} alt={c.title} />
                                </div>
                                <div className="collection-tile__meta">
                                    <span className="collection-tile__sub">{c.sub}</span>
                                    <h3 className="collection-tile__title">{c.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {justDropped.length > 0 && (
                    <section className="section">
                        <header className="section__head">
                            <h2 className="section__title">Just Dropped</h2>
                            <Link to="/sneakers" className="section__link">Shop all</Link>
                        </header>
                        <div className="drops-grid">
                            {justDropped.map((sneaker) => (
                                <Link
                                    key={sneaker.id}
                                    to={`/sneakers/${sneaker.id}`}
                                    className="drop-card"
                                >
                                    <div className="drop-card__media">
                                        {sneaker.photoUrl ? (
                                            <img src={sneaker.photoUrl} alt={sneaker.name} />
                                        ) : (
                                            <div className="drop-card__placeholder" />
                                        )}
                                    </div>
                                    <span className="drop-card__brand">{sneaker.brand}</span>
                                    <span className="drop-card__name">{sneaker.name}</span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        );
    }
}

export default Splash;
