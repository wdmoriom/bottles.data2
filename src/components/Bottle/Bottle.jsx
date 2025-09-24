import React from 'react';

const Bottle = ({bottle}) => {
     
    console.log(bottle)
    return (
        <div>
            <img src={bottle.image_url} alt="" />
        </div>
    );
};

export default Bottle;