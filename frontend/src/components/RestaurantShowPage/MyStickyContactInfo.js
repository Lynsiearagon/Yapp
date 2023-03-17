import React from 'react';
import Resume from "../../images/LynsieAragonResume.pdf";
import './RestaurantShowPage.css';


const MyStickyContactInfo = () => {

    return (
        <div id="myContactInfoAndResume">
            <h2 id="stickyContactMeHeaderDiv">Contact Me</h2>
            <div id="restoShowPersonalLinks">
                <a href="https://lynsiearagon.github.io/Lynsie-portfolio/"
                    target="_blank" rel="noreferrer" id="showPagePortfolioLink">Portfolio
                </a>
                <a href="https://www.linkedin.com/in/lynsie-aragon-87156a157/"
                    target="_blank" rel="noreferrer" id="showPageLinkedInLink">LinkedIn
                </a>
            </div>
            <div id="availablilityRestoShow">
                <div>Available</div>
                <div>Mon. - Fri.</div>
                <div>9am - 6pm</div>
            </div>
            <div>
                <a href={Resume} download>Download Resume</a>
            </div>
        </div>
    )

}

export default MyStickyContactInfo; 