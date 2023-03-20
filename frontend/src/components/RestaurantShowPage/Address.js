import React from 'react'; 
import './RestaurantShowPage.css';


const Address = (props) => {
    const street = props.street
    const city = props.city 
    const state = props.state 
    const zipcode = props.zipcode
    const neighborhood = props.neighborhood


    return (
        <ul id="address">
            <li id="addressLine1">
                {street}
            </li>
            <li id="addressLine2">
                {city}, {state} {zipcode}
            </li>
            <li id="addressLine3">
                {neighborhood}
            </li>
        </ul>
    )
}

export default Address;