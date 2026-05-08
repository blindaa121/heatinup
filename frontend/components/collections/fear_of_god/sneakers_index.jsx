import React from 'react';
import SneakerCard from '../../sneakers/sneakers_index_item';

class FearOfGodIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSneakers();
        window.scrollTo(0, 0);
    }

    render() {
        const { sneakers } = this.props;
        if (!sneakers) return null;

        return (
            <div className="collection">
                <header className="collection__header">
                    <span className="collection__eyebrow">Collection</span>
                    <h1 className="collection__title">Fear of God</h1>
                    <p className="collection__description">
                        In six years, Fear of God has gone from an emerging Los Angeles
                        label specializing in tees and hoodies to one of the biggest names
                        in fashion. With sneakers created alongside Vans and Nike, Fear of
                        God continues to evolve its elevated streetwear.
                    </p>
                </header>

                <div className="collection__grid">
                    {sneakers.map((sneaker) => (
                        <SneakerCard key={sneaker.id} sneaker={sneaker} />
                    ))}
                </div>
            </div>
        );
    }
}

export default FearOfGodIndex;
