// import React, { useState } from 'react'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Filters.css'; 
// import PriceFilters from './PriceFilters';


const Filters = ({restaurants}) => {

    const priceFilters = ['$', '$$', '$$$', '$$$$']

    return (
        <>
        <h3 id="filterHeader">
            Filters
        </h3>
        <div id="priceButtonsList">

            {
                priceFilters.map((price) => {
                    return (
                        <Link to={`/restaurants?price=${price}`}>
                            <div>{price}</div>
                        </Link>
                    )
                })
            }


{/* 
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
            </button> */}
        </div>
        </>
    )

}


export default Filters 