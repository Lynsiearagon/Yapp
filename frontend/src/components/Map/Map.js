import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
// import { useHistory } from 'react-router-dom';
import './Map.css'


const Map = ({restaurants, mapOptions = {}, mapEventHandlers = {}, markerEventHandlers = {}, zoom}) => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    // const markers = useRef();
    // const history = useHistory();


    useEffect(() => {
        if (!map) {
            setMap(new window.google.maps.Map(mapRef.current, {
                center: {
                    lat: 40.736437632541154,
                    lng: -73.99383014777163
                },
                zoom: zoom,
                ...mapOptions,
            }))
        }
    }, [mapRef, map, mapOptions, zoom]);


    return (
        <div ref={mapRef} className="map" > Map </div>
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