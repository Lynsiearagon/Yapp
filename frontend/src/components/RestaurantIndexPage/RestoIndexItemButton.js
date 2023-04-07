import { Link } from "react-router-dom";


const RestaurantIndexItemButton = ({cuisine}) => {

    let cuisineTypes;

    if (!cuisine) {
        return <div></div>
    } else {
        cuisineTypes = cuisine.split(",");
    }
    
    return (

        cuisineTypes.map((cuisineType) => {
            return (
                <button id="cuisineFilterButton" key={cuisineType}>
                    <Link to={`/restaurants?cuisine=${cuisineType}`}>{cuisineType}</Link>
                </button>
            )
        })
        
    )
}

export default RestaurantIndexItemButton;