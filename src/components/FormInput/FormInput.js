import React from 'react';
import "./FormInput.scss"


const formInput = ({placeholder}) => {
    return (
        <form className="form">
            <input placeholder={placeholder} type="text"/>
            <button className='button' type="button">Знайти</button>
        </form>
    );
};

export default formInput;