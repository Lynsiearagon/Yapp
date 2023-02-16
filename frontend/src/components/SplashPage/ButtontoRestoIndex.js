import { Link } from 'react-router-dom';


const ToRestoIndexButton = () => {

    return (
        <div id="toRestaurantIndexButton">
            <div id="feelingHungryHeaderDiv">
                <h1  id="feelingHungryHeader">
                    Feeling Hungry? 
                </h1>
            </div>

            <div id="findRestoButtonLink">
                <Link to="/restaurants">
                    <button id="findRestoButtonLink">Find Restaurants</button>
                </Link> 
            </div>
        </div>
    )
    
};


export default ToRestoIndexButton;