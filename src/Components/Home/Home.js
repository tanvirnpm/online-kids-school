import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../HeroBanner/HeroBanner';
import Service from '../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <div className="container">
                <h1 className="text-center">Our Services</h1>
                <div className="container my-4">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6 col-12">
                            <Service/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <Service/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <Service/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <Service/>
                        </div>
                    </div>
                </div>
                <div className="d-flex mb-4">
                    <Link className="btn btn-lg btn-outline-primary mx-auto" to="/services">More Services</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;