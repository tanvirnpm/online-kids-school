import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-light ">
            <div className="container py-3">
                <div className="d-flex justify-content-between">
                    <p className="m-0">&copy; Copyright 2021</p>
                    <p className="m-0"><Link to="/">Morning Fresh Glory School</Link></p>
                    <ul className="list-unstyled d-flex m-0">
                        <li><a href="https://facebook.com/MoriningFreshglorySchool"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/MoriningFreshglorySchool"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://linkedin.com/MoriningFreshglorySchool"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;