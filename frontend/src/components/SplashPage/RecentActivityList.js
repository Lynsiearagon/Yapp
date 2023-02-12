import React from 'react'
import RecentActivityItem from './RecentActivityItem'


const RecentActivity = () => {

    return (
        <>
        <h1>Recent Activity</h1>

        <div id="recentActivityWrapper">
            <ul>
                {RecentActivityItem}
            </ul>
        </div>
        </>
    )
}

export default RecentActivity