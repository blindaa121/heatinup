import React from 'react';
import { Link } from 'react-router-dom';
import SneakerPanelContainer from '../sneaker_panel/sneaker_panel_container';
// import NavBarContainer from ''
class Splash extends React.Component {
    constructor(props) {
        super(props)
        // this.fetchSneakers = this.fetchSneakers.bind(this)
    }

    componentDidMount() {
        this.props.fetchSneakers()
    };

    render() {
        return (
            <div className="splash-container">
                <img className="air-home" src="/assets/bo2ewj3dpcajmb6yqmpd.webp"></img>
                {/* <NavBarContainer /> */}
                <SneakerPanelContainer />
            </div> 
        )    
    }
    
}
    


export default Splash;