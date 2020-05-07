import React from 'react';
import { Link } from 'react-router-dom';
import SneakerPanelContainer from '../sneaker_panel/sneaker_panel_container';
import SneakerPanelContainer2 from '../sneaker_panel/fog_panel/sneaker_panel_container'
import SneakerPanelContainer3 from '../sneaker_panel/offwhite_panel/sneaker_panel_container'
// import NavBarContainer from ''
class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchSneakers()
    };

    render() {
        return (
            <div className="splash-container">
                <a href="#/sneakers/94"><img className="air-home" src={window.splashURL}></img></a>
                <SneakerPanelContainer />
                <br/>
                <a href="#/sneakers/64"><img className="air-home" src={window.splashFOG}></img></a>
                <SneakerPanelContainer2 />
                <img className="air-home" src={window.splashTEN}></img>
                <SneakerPanelContainer3 />
            </div> 
        )    
    }
    
}


export default Splash;