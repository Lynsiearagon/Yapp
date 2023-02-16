import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const RestoHours = ({times}) => {
    const location = useLocation();

    let formatted1 = times.replace('{', '')
    let formatted2 = formatted1.replace('}', '')
    const businessHours = formatted2.replace(/"/g, '')
    
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date();
    let day = weekday[d.getDay()];

    if (location.pathname !== '/restaurants') {
        return (
            businessHours.split(",").map((bh) => {
                return <div>{bh}</div>
            })
        )
    } else {

    return (
        
        businessHours.split(",").map((bh) => {
            if (bh.includes(day)) {
                return <div>{bh}</div>
            }
        })
    )
    };
}

export default RestoHours;