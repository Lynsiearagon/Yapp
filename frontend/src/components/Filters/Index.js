import { Link, useHistory, useLocation } from 'react-router-dom';
import React from 'react'
import './Filters.css'; 


const Filters = () => {
    const history = useHistory();
    const location = useLocation();
    const priceFilters = ['$', '$$', '$$$', '$$$$']
    const neighborhoods = ['Chelsea', 'Flatiron', 'Gramercy', 'Union Square', 'West Village']
    let bTLR;
    let bBLR;
    let bTRR;
    let bBRR; 


    const handleClickClearFilters = (e) => {
        e.preventDefault();
        history.push('/restaurants')
    }


    return (
        <>
        <div id="filterHeaderAndClearFilterDiv">
            <h3 id="filterHeader">Filters</h3>
            {location.search ? 
                <button onClick={handleClickClearFilters} id="clearFiltersButton">
                    Clear Filters
                </button> : 
                null 
            }
        </div>

        <div id="priceButtonsListDiv">
            {priceFilters.map((price, i) => {

                if (i === 0) {
                    bTLR = '15px'
                    bBLR = '15px'
                    bTRR = '0px'
                    bBRR = '0px' 
                } else if (i === 3) {
                    bTLR = '0px'
                    bBLR = '0px'
                    bTRR = '15px'
                    bBRR = '15px' 
                } else {
                    bTLR = '0px'
                    bBLR = '0px'
                    bTRR = '0px'
                    bBRR = '0px'
                }

                return (
                    <Link to={`/restaurants?price=${price}`}
                    className="priceFilterButton"
                    key={price}
                    style={{borderTopLeftRadius: bTLR, 
                        borderBottomLeftRadius: bBLR, 
                        borderTopRightRadius: bTRR, 
                        borderBottomRightRadius: bBRR}}
                    >
                        {price}
                    </Link>
                )
            })}
        </div>
        
        <div id="neighborhoodsFilter">
            <label id="neighborhoodLabelDiv">
                Neighborhood
                <ul id="neighborhoodList">
                {
                    neighborhoods.map((hood) => {
                        return (
                            <Link to={`/restaurants?neighborhood=${hood}`}
                                id="neighborhoodFilterItem"
                                key={hood}
                                >
                                <li id="neighborhoodListItem">{hood}</li>
                            </Link>
                        )
                    })
                }
                </ul>

            </label>

        </div>
        </>
    )

}


export default Filters 