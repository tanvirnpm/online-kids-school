import React from 'react';

const Service = (props) => {
    // console.log(props.course)
    const {name, price, coverImage} = props.course;
    return (
        <div className="card">
            <img src={coverImage} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle">Price: {price} taka</h6>
                <a href="#" className="btn btn-sm btn-primary float-end">Enrol Course</a>
            </div>
        </div>
    );
};

export default Service;