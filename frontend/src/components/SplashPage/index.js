import React from 'react';
import RecentActivity from './RecentActivityList.js';
import SplashPageImage from './SplashPageImage.js'
import Categories from './Categories.js'


const SplashPage = () => {

    return (
        <main id="splashPageMain">
            <SplashPageImage />
            <RecentActivity />
            <Categories />
        </main>
    )
}

export default SplashPage