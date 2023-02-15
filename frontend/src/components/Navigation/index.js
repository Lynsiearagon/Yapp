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

    if (location.pathname === '/restaurants') {
        position = 'sticky'
    } else {
        position = 'relative'
    }

    return (
        <nav id="navBar" style={{position: position}}>
            <Logo />
            <SearchBar />
            <PersonalLinks />
            <SessionNavigation />
        </nav>
    )
};

export default Navigation;