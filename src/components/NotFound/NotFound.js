import React from 'react';
import notFoundImage from '../../images/404.jpg';

const NotFound = () => {
    const goToHome = () => {
        window.location.replace('http://localhost:3000/home')
    }
    return (
        <div onClick={goToHome}>
            <img 
            width = '100%'
            height = '100%'
            src={notFoundImage}
             alt="" />
        </div>
    );
};

export default NotFound;