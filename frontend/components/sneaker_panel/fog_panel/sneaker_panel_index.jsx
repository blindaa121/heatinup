import React from 'react';
import { Link } from 'react-router-dom'
import SneakerPanelIndexItem from './sneaker_panel_index_item';
import Slider from 'react-slick';

class SneakerPanelIndex3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { sneakers } = this.props;
        const fog = sneakers.map(sneaker => <SneakerPanelIndexItem key={sneaker.id} sneaker={sneaker} />);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        return (
        <div className="sneaker-panel">

                <div className="sneaker-panel-header">
                    <h1 className="thelastdance">FEAR OF GOD COLLECTION</h1>
                    <Link to="/collections/fog" className='see-all'>See All</Link>
                </div>

                {/* <div className="sneaker-panel-items">
                        {sneakers.map(sneaker => <SneakerPanelIndexItem key={sneaker.id} sneaker={sneaker} />)}
                </div>  */}
                     
                <div className='slider-wrapper'>
                    <Slider {...settings}>
                        {fog}
                    </Slider>
                </div>
        </div>
        )
    }
};

export default SneakerPanelIndex3;