import { Link } from "react-router-dom";


const RestaurantIndexItemButton = ({name}) => {

    const names = name.split(",")
    
    return (

            names.map((n) => {
                return (
                    <button id="cuisineFilterButton"><Link to={`/restaurants?cuisine=${n}`}>{n}</Link></button>
                )
            })
        
    )
}

export default RestaurantIndexItemButton;