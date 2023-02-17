import { BsStarFill } from "react-icons/bs"


const Reviews = () => {

    return (
        <div id="reviewDiv">
            <div id="starRating">
                <BsStarFill className="starsOnRestoShowPage"/>
                <BsStarFill className="starsOnRestoShowPage"/>
                <BsStarFill className="starsOnRestoShowPage"/>
                <BsStarFill className="starsOnRestoShowPage"/>
            </div>
            <div id="review">
                <p>I am a placeholder review</p>
            </div>
        </div>
    )
}

export default Reviews;