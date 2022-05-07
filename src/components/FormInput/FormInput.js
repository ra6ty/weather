import React from 'react';
import "./FormInput.scss"

const formInput = ({placeholder, value}) => {
    return (
        <form className="form">
            <input placeholder={placeholder} type="text"/>
            <button type="button">{value}</button>
        </form>
    );
};

export default formInput;