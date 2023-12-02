import { useState, useEffect } from 'react';
import axios from 'axios';
import LogoutButton from '../components/Auth/LogoutButton/LogoutButton';

const HomePage = () => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/user-details', {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                setUserDetails(response.data.user_details);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails(); // Fetch user details only once when the component mounts
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            {userDetails ? (
                <div>
                    <h2>User Details</h2>
                    <p>ID: {userDetails.id}</p>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Role: {userDetails.role}</p>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}

            <LogoutButton />
        </div>
    );
};

export default HomePage;