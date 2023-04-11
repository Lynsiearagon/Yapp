import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantIndexItem from './RestoIndexItem'
import MapWrapper from '../Map/Map';
import Filters from '../Filters/Index';
import { fetchRestaurantsWithQueryString, getRestaurants } from '../../store/restaurants';
import './RestaurantIndexPage.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const RestaurantIndexPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const restaurants = useSelector(getRestaurants);

    console.log(location.search)

    useEffect(() => {
        dispatch(fetchRestaurantsWithQueryString(location.search))
    }, [location.search, dispatch]);

    return (

        <div id="restoIndexPageWrapper">

            <div id="filtersSideBar" className="restoIdxColumn">
                <Filters restaurants={restaurants} />
            </div>

            <div id="indexListingsDiv" className="restoIdxColumn">
                <RestaurantIndexItem restaurants={restaurants} />
            </div>

            <div id="mapDiv" className="restoIdxColumn">
                <div className="sticky">
                    <MapWrapper zoom={13} restaurants={restaurants} />
                </div>
            </div>

        </div>

    )


}


export default RestaurantIndexPage