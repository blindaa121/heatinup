import React from 'react';
import SneakerCard from '../../sneakers/sneakers_index_item';

class OffWhiteIndex extends React.Component {
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
                    <h1 className="collection__title">Off-White</h1>
                    <p className="collection__description">
                        Using RECONSTRUCT and GHOSTING approaches, Virgil shook sneaker
                        culture with his groundbreaking collaboration with Nike.
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

export default OffWhiteIndex;
