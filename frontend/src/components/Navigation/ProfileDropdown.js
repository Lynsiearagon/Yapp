import React, { useState, useEffect } from 'react';
import LogoutButton from "./Logout";
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import './Navigation.css'

const ProfileDropdown = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    let profilePhoto;

    if (!sessionUser.photoUrl) {
        profilePhoto = <FaUserCircle id="userPhotoIconInNav" /> 
    } else {
        profilePhoto = sessionUser.photoUrl;
    }

    return (
        <>
            <div id="ProfileDropdownWrapper">
                <button onClick={openMenu} id="userDropDownInNavBar">
                    {profilePhoto}
                </button>

                {showMenu && (
                    <ul id="userDropDownMenu">
                        <li>{sessionUser.firstName} {sessionUser.lastName}</li>
                        <li><LogoutButton /></li>
                    </ul>
                )}

            </div>
        </>
    )

}


export default ProfileDropdown;