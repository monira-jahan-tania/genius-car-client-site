import React from 'react';
import notFOund from '../../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Error 404 occurred</h1>
            <img className='w-100 d-flex justify-content-center' src={notFOund} alt="" />
        </div>
    );
};

export default NotFound;