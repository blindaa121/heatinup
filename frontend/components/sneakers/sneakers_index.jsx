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
            <div>
                <h1>Shop All Sneakers!</h1>
                <div>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} />)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex