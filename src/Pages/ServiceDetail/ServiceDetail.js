import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    return (
        <div>
            <h1>welcome to book: {service.name}</h1>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;