import React from 'react';
import serviceImg from '../../../Images/service-1.png'

const Service = () => {
    return (
        <div class="card">
            <img src={serviceImg} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">Alphabet flashcards</h5>
                <h6 className="card-subtitle">Price: 1200 taka</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary float-end">Enrol Course</a>
            </div>
        </div>
    );
};

export default Service;