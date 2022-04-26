import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';


const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);
    // const [user, setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@momo.taz',
    //     address: 'Tazmohol Road, MD.pur',
    //     phone: '01821933368'
    // });
    // const handleAddressChange = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    //     console.log(newUser);
    // }


    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your Order is Booked!');
                    event.target.reset();
                }
            })
            .then()
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Please checkout: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2 ' type="text" value={user?.displayName} name='name' placeholder='Enter your name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2 ' type="email" value={user?.email} name='email' placeholder='Enter your email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2 ' type="text" value={service.name} name='service' placeholder='Enter your service' required />
                <br />
                <input className='w-100 mb-2 ' type="text" name='address' placeholder='Enter your address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2 ' type="text" name='phone' placeholder='Enter your phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div >
    );
};

export default Checkout;