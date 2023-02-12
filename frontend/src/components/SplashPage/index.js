import React from 'react';
import RecentActivity from './RecentActivityList.js';
import SplashPageImage from './SplashPageImage.js'


const SplashPage = () => {

    return (
        <main id="splashPageMain">
            <SplashPageImage />
            <RecentActivity />
        </main>
    )
}

export default SplashPage