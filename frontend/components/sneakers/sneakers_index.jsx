import React from 'react';
import SneakerIndexItem from './sneakers_index_item';

class SneakerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchSneakers()
    }

    onChange(e) {
        this.setState({ search: e.target.value })
    }

    render () {
        const { search } = this.state;
        const { sneakers } = this.props;
        const { sneaker } = this.props;
        // debugger
        if (!sneakers) return null;


        return (
            <div className="outerSneakerdiv">
                <h1>Shop All</h1>
                
                <div className='search-container'>
                    <i class="fas fa-search fa-3x"></i>
                    <input className='search-input' label="Search for a sneaker" onChange={this.onChange}/>
                </div>
                 
                <div className='show-all'>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} search={search}/>)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex