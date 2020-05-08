import React from 'react';
import SneakerIndexItem from './sneakers_index_item';

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchSneakers()
    }

    render () {

        const { sneakers } = this.props;
        if (!sneakers) return null;

        return (
            <div className="outerSneakerdiv">
                <span className="collection-header">Fear Of God</span>
                <p className="collection-description">In six years, Fear of God has gone from an emerging Los Angeles label specializing in tees and hoodies to one of the biggest names in fashion. With sneakers created alongside Vans and Nike, Fear of God continues to evolve its elevated streetwear.</p>
                <div className='show-all'>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex