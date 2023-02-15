import React from 'react';
import './Navigation.css';
import SessionNavigation from './NavButtons';
import SearchBar from './SearchBar'
import PersonalLinks from './PersonalLinks';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';


const Navigation = () => {
    const location = useLocation();
    let sticky;

    if (location.pathname === '/restaurants') {
        sticky = 'sticky'
    } else {
        sticky = null
    }

    return (
        <nav id="navBar" className={sticky}>
            <Logo />
            <SearchBar />
            <PersonalLinks />
            <SessionNavigation />
        </nav>
    )
};

export default Navigation;