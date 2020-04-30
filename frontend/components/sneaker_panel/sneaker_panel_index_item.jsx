import React from 'react';

const SneakerPanelIndexItem  = ({ sneakers }) => {
    return (
        <div>
            {
                sneakers.map(sneakers => sneakers.name)
            }
        </div>
    )
}

export default SneakerPanelIndexItem