import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantIndexItem from './RestoIndexItem'
import MapWrapper from '../Map/Map';
import Filters from '../Filters/Index';
import { fetchRestaurants, getRestaurants } from '../../store/restaurants';
import './RestaurantIndexPage.css'


const RestaurantIndexPage = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants);

    useEffect(() => {
        dispatch(fetchRestaurants())
    }, [dispatch]);

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