import React from 'react';
import './styles.css';

const Home = ({ visits, setVisits }) => {
    const incrementVisits = () => {
        setVisits(prevVisits => prevVisits + 1);
    };

    return (
        <div className="container">
            <h2>Home Page</h2>
            <p>Banner Id- B00931223</p>
            <p>Home page visited {visits} times</p>
            <button onClick={incrementVisits}>Increment Visits</button>
        </div>
    );
};

export default Home;










