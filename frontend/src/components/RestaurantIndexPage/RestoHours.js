import React from 'react';


const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


export const RestoHoursSingleLine = ({times}) => {
    
    let formatted1 = times.replace('{', '');
    let formatted2 = formatted1.replace('}', '');
    const businessHours = formatted2.replace(/"/g, '');

    const d = new Date();
    let day = weekday[d.getDay()];


    return (

        businessHours.split(",").map((bh) => {

            let todayTag;
            let color; 

            if (bh.includes("Closed")) {
                todayTag = "Closed"
                color = "red"
            } else {
                todayTag = "Open"
                color = "green"
            }


            if (bh.includes(day)) {
                return <div key={bh}>
                            <span style={{color: color, marginRight: "5px"}}>{todayTag}</span>
                            {bh}
                        </div>
            }
        })
    );

};


export const RestoHoursFullList = ({times}) => {

    let formatted1 = times.replace('{', '');
    let formatted2 = formatted1.replace('}', '');
    const businessHours = formatted2.replace(/"/g, '');

    const d = new Date();
    let day = weekday[d.getDay()];

    return (

        businessHours.split(",").map((bh, i) => {

            let todayTag;
            let color; 

            if (bh.includes("Closed")) {
                todayTag = "Closed"
                color = "red"
            } else {
                todayTag = "Open"
                color = "green"
            }

            if (bh.includes(day)) {
                return <div key={i} id="dayAndTodayTagWrapper">
                            {bh} 
                            <div style={{color: color}}>{todayTag}</div>
                        </div>
            } else {
                return <div key={i}>{bh}</div>
            }

        })
    );

};
