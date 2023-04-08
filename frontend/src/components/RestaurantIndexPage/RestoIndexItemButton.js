import { useState } from "react";
import { useHistory } from "react-router-dom";


const RestaurantIndexItemButton = ({cuisine}) => {
    const history = useHistory();
    // const [cuisineType, setCuisineType] = useState('');
    
    let cuisineTypes;

    if (!cuisine) {
        return <div></div>
    } else {
        cuisineTypes = cuisine.split(",");
    }

    // const handleClick = (e, value) => {
    //     e.preventDefault();
    //     setCuisineType(e.target.value)

    //     history.push({
    //         pathname: `/restaurants`,
    //         search: `?cuisine=${cuisineType}`
    //     })
    // }

    return (

        cuisineTypes.map((cuisineType) => {
            return (
                <button id="cuisineFilterButton" 
                    key={cuisineType}
                    value={cuisineType}
                    // onClick={handleClick(cuisineType)}
                    >
                    {cuisineType}
                </button>
            )
        })
        
    )
}

export default RestaurantIndexItemButton;