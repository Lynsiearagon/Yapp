// import React, { useState } from 'react'; 
import './Filters.css'; 
// import PriceFilters from './PriceFilters';


const Filters = ({restaurants}) => {
    // const [selectedFilter, setSelectedFilter] = useState(null)


    // const displayRestaurantsByPrice = (e) => {

    //     restaurants.filter(resto => resto.price === value);

    // }

    // const handleClick = () => {

    // }


    return (
        <>
        <h3 id="filterHeader">
            Filters
        </h3>
        <div id="priceButtonsList">
            <button id="oneDollarSign" value='$'>
                $
            </button>
            <button value='$$'>
                $$
            </button>
            <button value='$$$'>
                $$$
            </button>
            <button id="fourDollarSigns" value='$$$$'>
                $$$$
            </button>
        </div>
        </>
    )

}


export default Filters 