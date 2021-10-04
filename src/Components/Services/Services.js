import React, { useContext } from 'react';
import { CoursesContext } from '../../App';
import Service from './Service/Service';

const Services = () => {
    const course = useContext(CoursesContext);
    // console.log(course)
    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">Our Services</h1>
            <div className="row gy-4">
                {
                    course.map(course => <div key={course.id} className="col-lg-3 col-md-6 col-12"><Service course={course}/></div>)
                }
            </div>
        </div>
    );
};

export default Services;