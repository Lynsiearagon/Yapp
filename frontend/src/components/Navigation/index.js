import React from 'react';
import './Navigation.css';
import SessionNavigation from './NavButtons';
import SearchBar from './SearchBar'
import PersonalLinks from './PersonalLinks';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';


const Navigation = () => {

    // setting conditional styling based on path location
    const location = useLocation();
    let position = location.pathname === '/restaurants' ? 'sticky' : 'relative';
    let borderBottom = location.pathname === '/' ? 'none' : '#e7e6e6 1px solid';
    let backgroundColor = location.pathname === '/restaurants' ? 'white' : 'transparent';


    // Nav bar component holds/renders following components: 
    // logo, search bar, personal links, session buttons
    return (
        <nav 
            id="navBar" 
            style={{position: position, borderBottom: borderBottom, backgroundColor: backgroundColor}}>
                <Logo />
                <SearchBar />
                <PersonalLinks />
                <SessionNavigation />
        </nav>
    )
};

export default Navigation;