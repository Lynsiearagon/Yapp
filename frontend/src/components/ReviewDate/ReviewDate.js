import React from 'react';


const ReviewDate = ({datePosted}) => {

    let split = datePosted.slice(0, 10).split("-")
    let reformatDate = `${split[1]}/${split[2]}/${split[0]}`

    return <div id="reviewDate">{reformatDate}</div>
};

export default ReviewDate; 