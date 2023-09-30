import React from 'react';
import '../Components/module.css'; // Import the CSS file for styling
import aboutBG from '../assets/about.jpg'
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className='image-container'>
                <img src={aboutBG}
                    className='contact-background'/>
                <h1 className='contactHeading'>About</h1>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-8 mx-5 aboutt'>
                    <p style={{color:'#fb246a'}}>About us</p>
                    <h2>We Provides Best Job Solution.</h2>
                    <p>"Unlock your career potential with us! We provide top-notch job solutions tailored to your needs. Find your dream job and embark on a journey to success with our expert guidance."</p>
                    <div>
                        <div className="row">
                            <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Software development</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Mobile App developement</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>

                        <Link to='/categories'><button className='btnnn'>All Categories</button> </Link> 
                        </div>
                    </div>
                </div>

                <div className='col-lg-4 col-md-8 about_images mx-4 mt-5' >
                    <img className='about1' src={about1} width='50%'/>
                    <img className='about2' src={about2} width='50%'/>
                    <img className='about3' src={about3} width='50%'/>
                </div>
            </div>

        </>
    // <div>
    //     <header className="about_header">
    //         <div className="about_overlay"></div>
    //         <h1>About Us</h1>
    //     </header>

    //     <section className="about">
    //         <div className="container">
    //             <div className="about-content">
    //                 <div className="about-image">
    //                     <img src={support}
    //                         alt="About Us Image"/>
    //                 </div>
    //                 <div className="about-text">
    //                     <h2>24k Talented people are getting Jobs</h2>
    //                     <p>
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    //                                         eget lorem vel metus varius tincidunt. Vestibulum vel elit vel
    //                                         est aliquam ultrices eu vel elit. Donec nec erat at tortor
    //                                         eleifend maximus. Curabitur dictum auctor justo, a ullamcorper
    //                                         quam accumsan ac.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // </div>


    );
};

export default About;
