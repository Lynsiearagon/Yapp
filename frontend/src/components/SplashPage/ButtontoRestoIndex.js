import { useHistory } from 'react-router-dom';


const ToRestoIndexButton = () => {
    const history = useHistory();

    const goToRestaurantsIndexPage = () => {
        history.push("/restaurants")
    }

    return (
        <div id="toRestaurantIndexButton">
            <div id="feelingHungryHeaderDiv">
                <h1  id="feelingHungryHeader">
                    Feeling Hungry? 
                </h1>
            </div>

            <div id="findRestoButtonLink" onClick={goToRestaurantsIndexPage}>
                <button id="findRestoButtonLink">Find Restaurants</button>
            </div>
        </div>
    )
    
};


export default ToRestoIndexButton;