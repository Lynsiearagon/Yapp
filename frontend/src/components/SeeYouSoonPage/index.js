import React from 'react'
import './SeeYouSoon.css'

const SeeYouSoonPage = () => {

    return (
        <div id="formAndImageWrapperSYS">
            <div id="contactMeDiv">
            <header id="seeYouSoonHeaderDiv">
                <h2 id="seeYouSoonHeader">
                    Heading out? <br />
                    Thanks for visiting.
                </h2>
                <p id="availability">
                    Like what you see? Please feel free to contact me. 
                    <br /> I'm available Monday - Friday from 9 am to 7 pm.
                </p>
            </header>
                <p id="contactMessage">
                    Contact information listed below:
                </p>
                <input 
                    type="text" 
                    id="contactInfo"
                    placeholder=" +1 (512) 736-8054  or  Lynsie.aragon@gmail.com" />
            </div>

            <div id="SYSimgDiv">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/4a1b6846ee4a/devices/phones.png" 
                alt="Yelp app on cellphone screen"
                id="seeYouSoonImg" />
            </div>
        </div>
    )
}

export default SeeYouSoonPage