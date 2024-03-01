import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Second = () => {
    let navigate = useNavigate();
    
    useEffect(() => {
        if (!sessionStorage.getItem("login")) {
            setTimeout(() => {
                navigate('/first');
            }, 1000);

            console.log("here");
        }
    }, []);

    const logOut = () => {
        sessionStorage.removeItem("login");
        navigate('/first'); // Redirect to login page after logout
    };

    return (
        <div>
            Profile
            <button onClick={logOut}>Logout</button>
        </div>
    );
};

export default Second;
