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
                <div style={{ borderColor: "white" }}>9:30am - 6pm</div>
            </div>
            <div id="emailInputFieldDiv">
                <input type="text" value="Lynsie.aragon@gmail.com" id="emailInputField"/>
            </div>
            <div id="resumeDownloadRestoShow">
                <a href={Resume} id="resumeLink" download>Download Resume</a>
            </div>
        </div>
    )

}

export default MyStickyContactInfo; 