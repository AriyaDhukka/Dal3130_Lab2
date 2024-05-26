import React from 'react';
import './styles.css';

const About = ({ visits }) => {
    return (
        <div className="container">
            <h2>About Page</h2>
            <p>Welcome to the About Page</p>
            <p>Home page visited {visits} times</p>
        </div>
    );
};

export default About;

