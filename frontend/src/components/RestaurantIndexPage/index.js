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
                <RestaurantIndexItem />
                <RestaurantIndexItem />
                <RestaurantIndexItem />
            </div>

            <div id="mapDiv" className="restoIdxColumn">
                <div className="sticky">
                    <MapWrapper />
                </div>
            </div>

        </div>

    )


}


export default RestaurantIndexPage