import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FiPhoneCall } from "react-icons/fi";
import './RestaurantShowPage.css';


const StickyRestoContactInfo = ({website, phone}) => {

    return (
        <div id="restoContactInfo">
            <div  id="restoWebsiteLinkDiv">
                <a href={website} 
                    target="_blank" rel="noreferrer" id="restoWebsiteLink">
                    {website}
                </a>
                <BiLinkExternal />
            </div>
            <div id="restoPhoneNumber">
                {phone}
                <FiPhoneCall />
            </div>
        </div>
    )
}

export default StickyRestoContactInfo;