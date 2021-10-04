import React from 'react';

const About = () => {
    return (
        <div className="container" style={{height: "80vh"}}>
            <h1 className="text-center py-3">About Us</h1>
            <div className="row align-items-center">
                <div className="col-6">
                    <p>At  we believe learning should be fun and free. Our flash cards are simple, effective and accessible to everyone - with no strings attached.</p>
                    <p><b>Morning Fresh Glory School</b> began as a side project by a father frustrated with the lack of suitable flashcards to teach his own children. Two of his children are grown up now (they inspired our logo) and help with creating and adding new flashcards.</p>
                    <p>We hope you have as much fun using these flashcards as we had making them.</p>
                </div>
                <div className="col-6">
                    <img className="img-fluid" src="https://www.pngitem.com/pimgs/m/111-1117391_download-kids-learning-png-image-kids-learning-png.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default About;