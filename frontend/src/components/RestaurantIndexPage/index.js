

import './RestaurantIndexPage.css'
import RestaurantIndexItem from './RestaurantIndexItem'


const RestaurantIndexPage = () => {

    return (

        <div id="restoIndexPageWrapper">

            <div id="filtersSideBar" className="restoIdxColumn">
                Filter Placeholder
            </div>

            <div id="indexListingsDiv" className="restoIdxColumn">
                <RestaurantIndexItem />
            </div>

            <div id="mapDiv" className="restoIdxColumn">
                Map placeholder
            </div>

        </div>

    )


}


export default RestaurantIndexPage