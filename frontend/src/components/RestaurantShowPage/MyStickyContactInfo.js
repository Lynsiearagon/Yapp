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
                <div style={{width: "80px"}}>Available</div>
                <div style={{width: "90px"}}>Mon. - Fri.</div>
                <div style={{ borderColor: "white" }}>9 am - 6 pm</div>
            </div>
            <div id="emailInputFieldDiv">
                <input type="text" placeholder="Lynsie.aragon@gmail.com" id="emailInputField"/>
            </div>
            <div id="resumeDownloadRestoShow">
                <a href={Resume} id="resumeLink" download>Download Resume</a>
            </div>
        </div>
    )

}

export default MyStickyContactInfo; 