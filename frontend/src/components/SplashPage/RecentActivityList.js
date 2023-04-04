import React from 'react';
import { useSelector } from 'react-redux';
import RecentActivityItem from './RecentActivityItem';
import * as reviewActions from '../../store/reviews';


const RecentActivity = ({restaurants}) => {
    const reviews = useSelector(reviewActions.getReviews);

    return (
        <div id="recentActivityWrapper">
            <h1 className="splashTitles">Recent Activity</h1>
            <div >
                <ul className="RAGrid">
                    {
                        Object.values(reviews).reverse().map((review) => {
                            return <li key={review.id}><RecentActivityItem review={review} restaurants={restaurants} /></li>   
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default RecentActivity;