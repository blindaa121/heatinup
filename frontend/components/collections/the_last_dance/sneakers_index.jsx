import React from 'react';
import SneakerCard from '../../sneakers/sneakers_index_item';

class TheLastDanceIndex extends React.Component {
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
                    <h1 className="collection__title">The Last Dance</h1>
                    <p className="collection__description">
                        The Last Dance documentary focuses on Michael Jordan and the Chicago
                        Bulls as they strive for their sixth NBA Championship. To mark the
                        retrospective of one of the greatest basketball players of all time,
                        we take an in-depth look at the legacy of Air Jordans that MJ donned
                        during these defining moments.
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

export default TheLastDanceIndex;
