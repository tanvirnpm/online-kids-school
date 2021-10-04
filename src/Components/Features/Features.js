import React from 'react';

const Features = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center pb-3">Our Features</h1>
            <div className="row g-3">
                <div className="col-md-4 col-12">
                    <div style={{height: '350px'}} className="text-center border rounded p-3">
                        <img className="img-fluid" style={{width: '50%'}} src="https://www.totcards.com/img/book-2x.png" alt="" />
                        <h3 className="py-3">Simple & easy to use</h3>
                        <p>Designed especially for young learners, with clear images and words. Simply download the PDF files and print.</p>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div style={{height: '350px'}} className="text-center border rounded p-3">
                        <img className="img-fluid" style={{width: '50%'}} src="https://www.totcards.com/img/blocks-2x.png" alt="" />
                        <h3 className="py-3">Flashcard videos</h3>
                        <p>Most of our flashcards have accompanying videos which help support and aid learning. It also help brainstorming for kids</p>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div style={{height: '350px'}} className="text-center border rounded p-3">
                        <img className="img-fluid" style={{width: '50%'}} src="https://www.totcards.com/img/books-2x.png" alt="" />
                        <h3 className="py-3">Tried and tested</h3>
                        <p>Thousands of families from across the globe use our flashcards and have given us glowing and often heartfelt feedback.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;