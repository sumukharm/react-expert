import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css'

const Home = () => {

    return (

        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="container">home page</div>
            <Link to="/Contents" className="container">
                <button>
                        click me
                </button>
            </Link>
        </div>
    )
}

export default Home;