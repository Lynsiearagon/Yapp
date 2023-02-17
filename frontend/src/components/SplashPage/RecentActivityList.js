import React from 'react';
import RecentActivityItem from './RecentActivityItem';
import { useLocation } from 'react-router-dom';


const RecentActivity = () => {
    const location = useLocation();

    if (location.pathname === '/') 
    return (
        <div id="recentActivityWrapper">
            <h1 className="splashTitles">Recent Activity</h1>

    {/* Once the restos are set up, map through and populate info */}

            <div >
                <ul className="RAGrid">
                    <RecentActivityItem />
                    <RecentActivityItem />
                    <RecentActivityItem />
                    <RecentActivityItem />
                </ul>
            </div>
        </div>
    )
}

export default RecentActivity;