import React from 'react';
import RecentActivity from './RecentActivityList.js';
import SplashPageImage from './SplashPageImage.js';
import Categories from './Categories.js';
import ToRestoIndexButton from './ButtontoRestoIndex.js';


const SplashPage = () => {

    return (
        <main id="splashPageMain">
            <ToRestoIndexButton />
            <SplashPageImage />
            <RecentActivity />
            <Categories />
        </main>
    )
}

export default SplashPage;