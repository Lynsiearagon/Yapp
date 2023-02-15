import React from 'react';


const RestoHours = ({times}) => {
    
    let formatted1 = times.replace('{', '')
    let formatted2 = formatted1.replace('}', '')
    const businessHours = formatted2.replace(/"/g, '')
    
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = new Date();
    let day = weekday[d.getDay()];

    return (
        
            businessHours.split(",").map((bh) => {
                if (bh.includes(day)) {
                    return <div>{bh}</div>
                }
            })
        
    )
}

export default RestoHours 