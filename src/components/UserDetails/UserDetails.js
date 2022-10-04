import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div>
            <h1>User Details Here</h1>
            <h3>Name: {user.name}</h3>
            <p>Phone Number: {user.phone}</p>
        </div>
    );
};

export default UserDetails;