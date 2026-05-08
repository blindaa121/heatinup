import React from 'react';
import { Link } from 'react-router-dom';

const TILES = [
    { sneakerId: 86, imgKey: 'blackgold1s', alt: 'Black & gold Air Jordan 1s' },
    { sneakerId: 25, imgKey: 'offwhite1s', alt: 'Off-White Air Jordan 1' },
    { sneakerId: 91, imgKey: 'travis6s', alt: 'Travis Scott Air Jordan 6' },
    { sneakerId: 74, imgKey: 'blackwht_fog', alt: 'Fear of God 1 Black/White' },
    { sneakerId: 26, imgKey: 'offwhiteprestos', alt: 'Off-White Presto' },
    { sneakerId: 92, imgKey: 'travislows', alt: 'Travis Scott Air Jordan 1 Low' },
    { sneakerId: 2, imgKey: 'bred4style', alt: 'Bred Air Jordan 4' },
    { sneakerId: 28, imgKey: 'offwhitevp2', alt: 'Off-White VaporMax' },
    { sneakerId: 68, imgKey: 'white_fog', alt: 'White Fear of God 1' },
    { sneakerId: 87, imgKey: 'bredtoe1s', alt: 'Bred Toe Air Jordan 1' },
    { sneakerId: 89, imgKey: 'royalblue1s', alt: 'Royal Blue Air Jordan 1' },
    { sneakerId: 67, imgKey: 'yellow_fog', alt: 'Yellow Fear of God 1' },
    { sneakerId: 55, imgKey: 'bredv2s', alt: 'Yeezy Bred V2' },
    { sneakerId: 85, imgKey: 'shattered1', alt: 'Shattered Backboard Air Jordan 1' },
    { sneakerId: 43, imgKey: 'zebras', alt: 'Yeezy Zebra' },
    { sneakerId: 5, imgKey: 'spacejams', alt: 'Air Jordan 11 Space Jam' },
    { sneakerId: 11, imgKey: 'cement3s', alt: 'Air Jordan 3 White Cement' },
    { sneakerId: 4, imgKey: 'infrared6s', alt: 'Air Jordan 6 Infrared' },
    { sneakerId: 88, imgKey: 'coolgrey11s', alt: 'Air Jordan 11 Cool Grey' },
    { sneakerId: 90, imgKey: 'travis1s', alt: 'Travis Scott Air Jordan 1' },
    { sneakerId: 93, imgKey: 'travis4s', alt: 'Travis Scott Air Jordan 4' },
];

class Styles extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="styles">
                <header className="styles__header">
                    <span className="styles__eyebrow">Editorial</span>
                    <h1 className="styles__title">OnFeet Styles</h1>
                    <p className="styles__sub">
                        Daily inspiration from the community. Scroll to discover and shop
                        trending styles.
                    </p>
                </header>

                <div className="styles__masonry">
                    {TILES.map((tile) => (
                        <Link
                            key={tile.sneakerId}
                            to={`/sneakers/${tile.sneakerId}`}
                            className="styles__tile"
                        >
                            <img src={window[tile.imgKey]} alt={tile.alt} />
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Styles;
