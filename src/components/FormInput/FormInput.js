import React from 'react';
import "./FormInput.scss"
import {Link} from "react-router-dom";


const formInput = ({placeholder, value}) => {
    return (
        <form className="form">
            <input placeholder={placeholder} type="text"/>
            <Link to="/weather" className='button' type="button">{value}</Link>
        </form>
    );
};

export default formInput;