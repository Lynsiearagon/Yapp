import { BsStarFill } from "react-icons/bs"


const Reviews = ({review}) => {

    console.log("IN REVIEW COMPONENT")
    console.log(review.id)

    return (
        <div id="reviewDiv">
            <div id="starRating">
                {review.starRating}
            </div>
            
            <div id="review">
                <ol>
                    <li>{review.reviewerFirstName}</li>
                    <li>{review.body}</li>
                </ol>
            </div>
        </div>
    )
}

export default Reviews;