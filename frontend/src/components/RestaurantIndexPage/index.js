import './RestaurantIndexPage.css'
import RestaurantIndexItem from './RestoIndexItem'
import MapWrapper from '../Map/Map';
import React from 'react';
import Filters from '../Filters/Index';


const RestaurantIndexPage = () => {

    return (

        <div id="restoIndexPageWrapper">

            <div id="filtersSideBar" className="restoIdxColumn">
                <Filters />
            </div>

            <div id="indexListingsDiv" className="restoIdxColumn">
                <RestaurantIndexItem />
            </div>

            <div id="mapDiv" className="restoIdxColumn">
                <MapWrapper />
            </div>

        </div>

    )


}


export default RestaurantIndexPage