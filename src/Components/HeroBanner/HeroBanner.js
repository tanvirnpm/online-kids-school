import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1>Make learning fun with our free printable flashcards & videos</h1>
                        <div className="d-flex">
                            <Link className="btn btn-outline-primary" to="/services">View Our Services</Link> <div className="p-2"></div>
                            <Link className="btn btn-outline-primary" to="/about">About Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://www.totcards.com/img/alphabet-flash-cards-2x.png" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;