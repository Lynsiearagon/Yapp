import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useHistory } from 'react-router-dom';
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


    useEffect(() => {
        if (!map) {
            setMap(new window.google.maps.Map(inputRef.current, {
                center: {
                    lat: 40.736437632541154,
                    lng: -73.99383014777163
                },
                zoom: zoom,
                ...mapOptions,
            }))
        }
    }, [inputRef, map, mapOptions, zoom]);

    useEffect(() => {
        if (map) {
            const listeners = Object.entries(mapEventHandlers).map(([event, handler]) => 
                window.google.maps.event.addListener(
                    map, 
                    event,
                    (...args) => handler(...args, map)
                )
            )
            return () => listeners.forEach(window.google.maps.event.removeListener);
        }
    }, [map, mapEventHandlers]);


    useEffect(() => {
        if (map) {
            restaurants.map((restaurant, i) => {
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
    }, [restaurants, history, map, markerEventHandlers]);


    useEffect(() => {
        Object.entries(markers.current).forEach(([restaurantId, marker]) => {
            const label = marker.getLabel();
            const icon = marker.getIcon();

            if (parseInt(restaurantId) === highlightedRestaurant) {
                marker.setLabel({ ...label, color: 'white'})
            }
        })
    })


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