import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h1>welcome to book: {service.name}</h1>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed to checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;