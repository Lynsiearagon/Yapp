import React from 'react';


const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


export const RestoHoursSingleLine = ({times}) => {
    
    let formatted1 = times.replace('{', '');
    let formatted2 = formatted1.replace('}', '');
    const businessHours = formatted2.replace(/"/g, '');

    const d = new Date();
    let day = weekday[d.getDay()];

    return (

        businessHours.split(",").map((bh) => {
            if (bh.includes(day)) {
                return <div key={bh}>{bh}</div>
            }
        })
    );

};


export const RestoHoursFullList = ({times}) => {

    let formatted1 = times.replace('{', '');
    let formatted2 = formatted1.replace('}', '');
    const businessHours = formatted2.replace(/"/g, '');

    return (

        businessHours.split(",").map((bh) => {
            return <div key={bh}>{bh}</div>
        })
    );

};
