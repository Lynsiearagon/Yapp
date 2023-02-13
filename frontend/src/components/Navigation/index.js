import React from 'react';
import './Navigation.css';
import SessionNavigation from './NavButtons';
import SearchBar from './SearchBar'
import PersonalLinks from './PersonalLinks';
import Logo from './Logo';


const Navigation = () => {

    return (
        <nav id="navBar">
            <Logo />
            <SearchBar />
            <PersonalLinks />
            <SessionNavigation />
        </nav>
    )
};

export default Navigation;