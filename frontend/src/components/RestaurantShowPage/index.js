import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getRestaurant } from "../../store/restaurants";

const RestaurantShowPage = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId))



    return (
        <div id="restoShowPageWrapper">
            



        </div>
    )

}

export default RestaurantShowPage;