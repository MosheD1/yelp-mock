import React from 'react';
import './Navigation.css';

const Navigation = ({route}) => {
    if (route === 'home')
    {
        return (
            <nav>
                <a href='#a'>Contact</a>
                <a href='#a'>About Us</a>
                <a href='#a'>Log Out</a>
            </nav>
        );
    } else {
        return (
            <nav>
                <a href='#a'>Log In</a>
            </nav>
        );
    }
}

export default Navigation;