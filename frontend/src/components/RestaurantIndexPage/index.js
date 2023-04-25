import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantIndexItem from './RestoIndexItem'
import MapWrapper from '../Map/Map';
import Filters from '../Filters/Index';
import { fetchRestaurantsWithQueryString, getRestaurants } from '../../store/restaurants';
import { useLocation } from 'react-router-dom';
import './RestaurantIndexPage.css'


const RestaurantIndexPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const restaurants = useSelector(getRestaurants);
    const searchBar = document.getElementById("searchBar");
    const searchBarValue = searchBar.getAttribute("value") ? searchBar.getAttribute("value") : '';

    useEffect(() => {
        dispatch(fetchRestaurantsWithQueryString(location.search))
    }, [location.search, dispatch]);


    return (

        <div id="restoIndexPageWrapper">

            <div id="filtersSideBar" className="restoIdxColumn">
                <Filters restaurants={restaurants} />
            </div>

            {(!restaurants.length) ? 
                <div id="indexListingsDiv" className="restoIdxColumn">
                    <p id="couldNotFindRestaurants">{`We could not find restaurants that include '${searchBarValue}'. Try a new search.`}</p>
                </div> :

                <div id="indexListingsDiv" className="restoIdxColumn">
                    <RestaurantIndexItem restaurants={restaurants} />
                </div>
            }

            <div id="mapDiv" className="restoIdxColumn">
                <div className="sticky">
                    <MapWrapper zoom={14} restaurants={restaurants} />
                </div>
            </div>

        </div>

    )


}


export default RestaurantIndexPage