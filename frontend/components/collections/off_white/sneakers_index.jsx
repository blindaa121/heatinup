import React from 'react';
import SneakerIndexItem from './sneakers_index_item';

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSneakers();
        window.scrollTo(0, 0);
    }

    render () {

        const { sneakers } = this.props;
        if (!sneakers) return null;

        return (
            <div className="outerSneakerdiv">
                <span className="collection-header">OFF-WHITE</span>
                <p className="collection-description">Using RECONSTRUCT and GHOSTING approaches, Virgil shook the sneaker culture with his groundbreaking collaboration with Nike.</p>
                <div className='show-all'>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex