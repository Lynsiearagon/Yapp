import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecentActivity from './RecentActivityList.js';
import SplashPageImage from './SplashPageImage.js';
import Categories from './Categories.js';
import ToRestoIndexButton from './ButtontoRestoIndex.js';
import * as restaurantActions from '../../store/restaurants';
import * as reviewActions from '../../store/reviews';


const SplashPage = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(restaurantActions.getRestaurants);

    
    useEffect(() => {
        dispatch(restaurantActions.fetchRestaurants());
        dispatch(reviewActions.fetchAllReviews());
    }, [dispatch]);

    
    return (
        <main id="splashPageMain">
            <ToRestoIndexButton />
            <SplashPageImage />
            <RecentActivity restaurants={restaurants} />
            <Categories />
        </main>
    )
}

export default SplashPage;