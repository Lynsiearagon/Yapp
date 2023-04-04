import React from 'react';
import './Navigation.css';
import SessionNavigation from './NavButtons';
import SearchBar from './SearchBar'
import PersonalLinks from './PersonalLinks';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';


const Navigation = () => {
    const location = useLocation();
    let position;
    let borderBottom;
    let backgroundColor; 

    if (location.pathname === '/restaurants') {
        position = 'sticky';
        backgroundColor = 'white';
    } else {
        position = 'relative';
        backgroundColor = 'transparent';
    }

    if (location.pathname === '/') {
        borderBottom = 'none';
    } else {
        borderBottom = '#e7e6e6 1px solid';
    }

    return (
        <nav id="navBar" style={{position: position, borderBottom: borderBottom, backgroundColor: backgroundColor}}>
            <Logo />
            <SearchBar />
            <PersonalLinks />
            <SessionNavigation />
        </nav>
    )
};

export default Navigation;