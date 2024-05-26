import React from 'react';
import './styles.css';

const Contact = ({ visits }) => {
    return (
        <div className="container">
            <h2>Contact Page</h2>
            <p>Welcome to the Contact Page</p>
            <p>Home page visited {visits} times</p>
        </div>
    );
};

export default Contact;

