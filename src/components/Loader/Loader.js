import React from 'react';
import './Loader.css'

const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '.5rem', position: "absolute", top: '50%', left: '46%'}}>
            <div className="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Loader;
