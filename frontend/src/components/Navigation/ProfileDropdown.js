import React from 'react'; 
import LogoutButton from "./Logout";
import { useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
// import {  }


const ProfileDropdown = () => {
    // const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)

    // let profilePhoto;

    // console.log(sessionUser)

    // if (sessionUser.profilePhoto === null) {
    //     return profilePhoto = <FaUserCircle id="userPhotoIcon" /> 
    // } else {
    //     return profilePhoto = sessionUser.profilePhoto
    // }

    // console.log(profilePhoto)

    return (
        <div>
            <FaUserCircle id="userPhotoIcon" />
            <LogoutButton />
        </div>
    )

}


export default ProfileDropdown;