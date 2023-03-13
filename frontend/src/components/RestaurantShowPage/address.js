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
            <li>{street}</li>
            <li>{city}, {state} {zipcode}</li>
            <li>{neighborhood}</li>
        </ul>
    )
}

export default Address;