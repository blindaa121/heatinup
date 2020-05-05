import React from 'react';

class Styles extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0)
    }

    render () {
        return (
            <div className='stylesContainer'>

                <div className='header-container'>
                    <h1 className='styles-header'>OnFeet Styles</h1>
                    <span>Daily inspiration from our community.</span>
                    <span>Scroll to discover and shop trending styles.</span>
                </div>
                    
                <div className='outerpic-div'>
                    <div className='left-section'>
                        <a href={`#/sneakers/1`}><img src={window.blackgold1s} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.blackwht_fog} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.bred4style} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.bredtoe1s} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.bredv2s} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.spacejams} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.coolgrey11s} alt=""/></a>
                    </div>

                    <div className='mid-section'>
                        <a href={`#/sneakers/1`}><img src={window.offwhite1s} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.offwhiteprestos} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.offwhitevp2} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.royalblue1s} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.shattered1} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.cement3s} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.travis1s} alt="" /></a> 
                    </div>

                    <div className='right-section'>
                        <a href={`#/sneakers/1`}><img src={window.travis6s} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.travislows} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.white_fog} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.yellow_fog} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.zebras} alt="" /></a>
                        <a href={`#/sneakers/1`}><img src={window.infrared6s} alt=""/></a>
                        <a href={`#/sneakers/1`}><img src={window.travis4s} alt="" /></a>
                    </div>
                </div>   
        </div>
        )
        
    }
}

export default Styles