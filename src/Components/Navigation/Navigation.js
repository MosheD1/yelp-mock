import React from 'react';
import './Navigation.css';

const Navigation = ({route, onRouteChange}) => {
    if (route === 'home')
    {
        return (
            <nav>
                <a href='#a' onClick={() => onRouteChange('signout')}>Log Out</a>
            </nav>
        );
    } else {
        return (
            <nav>
                <a href='#a' onClick={() => onRouteChange('register')}>Register</a>
                <a href='#a' onClick={() => onRouteChange('signin')}>Sign In</a>
            </nav>
        );
    }
}

export default Navigation;