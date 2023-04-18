import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useHistory, useParams  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getRestaurant } from '../../store/restaurants';
import './Map.css'


const Map = ({
    restaurants, 
    highlightedRestaurant, 
    mapOptions = {}, 
    mapEventHandlers = {}, 
    markerEventHandlers = {}, 
    zoom
    }) => {

    const [map, setMap] = useState(null);
    const inputRef = useRef(null);
    const markers = useRef({});
    const history = useHistory();
    const { restaurantId } = useParams();
    const restaurant = useSelector(getRestaurant(restaurantId));

    // default center is NYC App Academy
    let latitude = restaurantId ? restaurant.latitude : 40.736437632541154;
    let longitude = restaurantId ? restaurant.longitude : -73.99383014777163;


  // Create map
    useEffect(() => {
        if (!map) {
            setMap(new window.google.maps.Map(inputRef.current, {
                center: {
                    lat: latitude,
                    lng: longitude
                },
                zoom: zoom,
                ...mapOptions,
            }));
        }
    }, [inputRef, map, mapOptions, zoom, latitude, longitude]);


    // Add event handlers to map
    useEffect(() => {
        if (map) {
            const listeners = Object.entries(mapEventHandlers).map(([event, handler]) => 
                window.google.maps.event.addListener(
                    map, 
                    event,
                    (...args) => handler(...args, map)
                )
            );
            return () => listeners.forEach(window.google.maps.event.removeListener);
        }
    }, [map, mapEventHandlers]);


  // Update map markers whenever restaurants change
    useEffect(() => {
        if (map && restaurantId) {
            if (markers.current[restaurant.id]) return;

            const marker = new window.google.maps.Marker({
                map, 
                position: new window.google.maps.LatLng(restaurant.latitude, restaurant.longitude) 
            });
            
            markers.current[restaurant.id] = marker;

        } else if (map) {
            restaurants.forEach((restaurant, i) => {
                if (markers.current[restaurant.id]) return;

                const marker = new window.google.maps.Marker({
                    map, 
                    position: new window.google.maps.LatLng(restaurant.latitude, restaurant.longitude),
                    label: {
                        text: `${(i+1).toString()}`,
                        frontWeight: 'bold',
                        color: 'white'
                    }
                });

                Object.entries(markerEventHandlers).forEach(([event, handler]) => {
                    marker.addListener(event, () => handler(restaurant));
                })
                markers.current[restaurant.id] = marker;
            })

            Object.entries(markers.current).forEach(([restaurantId, marker]) => {
                if (restaurants.some(restaurant => restaurant.id.toString() === restaurantId)) return;

                marker.setMap(null);
                delete markers.current[restaurantId];
            })
        } 
    }, [restaurants, history, map, markerEventHandlers, restaurantId, restaurant]);


  // Change the style for bench marker on hover:    
    useEffect(() => {
        Object.entries(markers.current).forEach(([restaurantId, marker]) => {
            const label = marker.getLabel();

            if (parseInt(restaurantId) === highlightedRestaurant) {
                marker.setLabel({ ...label, frontWeight: 'bolder'});
            } else {
                marker.setLabel({ ...label, frontWeight: 'bold'});
            }
        })
    }, [markers, highlightedRestaurant])


    return (
        <div ref={inputRef} className="map" > Map </div>
    );
}


const MapWrapper = (props) => {

    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            <Map {...props} />
        </Wrapper>
    );
}


export default MapWrapper;