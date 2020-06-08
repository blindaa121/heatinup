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
        if (!sneakers) return null;

        return (
            <div className="outerSneakerdiv">
                <span className="shop-all">Shop All</span>
                
                <div className='search-container'>
                    <i className="fas fa-search fa-3x sneaker-search"></i>
                    <div className='col-3'>
                        <input type='text' className='search-input effect-2' placeholder="TYPE TO SEARCH" onChange={this.onChange}/>
                        <span className="focus-border"></span>
                    </div>
                </div>
                 
                <div className='show-all'>
                    {sneakers.map(sneaker => <SneakerIndexItem key={sneaker.id} sneaker={sneaker} search={search}/>)} 
                </div>
            </div>
        )
    }
}

export default SneakerIndex