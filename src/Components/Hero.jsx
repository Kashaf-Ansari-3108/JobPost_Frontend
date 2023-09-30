import React from 'react';
import '../Components/module.css' // Create a CSS file for styling
import hero from '../assets/hero_img.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="content">
                    <h1>Find the most exciting startup jobs</h1>
                    <p>Search and apply for jobs in your desired location.</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Search by location"/>
                        <button className='search_btn'>Search Jobs</button>
                    </div>
                </div>
                <div className="image">
                    <img src={hero}
                        alt="Job"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;
