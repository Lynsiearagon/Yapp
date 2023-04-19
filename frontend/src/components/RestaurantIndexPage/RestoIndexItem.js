import './RestaurantIndexPage.css';
import RestaurantIndexItemButton from './RestoIndexItemButton';
import { RestoHoursSingleLine } from './RestoHours';
import { BsClock } from 'react-icons/bs';
import RestaurantAmenitiesListings from './RestoAmenitiesListings';
import { Link } from 'react-router-dom';
import RestoIndexReview from './IndexReview';
import { VisualAverageStarRating } from '../Stars/Index';


const RestaurantIndexItem = ({restaurants}) => {
    
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    };


    return (   

        restaurants.map((resto, i) => {

            return (
                
            <Link to={`/restaurants/${resto.id}`} 
                id="RestoItemDivLink" 
                onClick={scrollToTop} 
                key={resto.id}
                target="_blank"
                rel="noreferrer"
                >
                <div id='imageAndRestoInfo'>   
                    <img src="https://media.istockphoto.com/id/833390070/photo/arabic-dishes-and-meze.jpg?s=612x612&w=0&k=20&c=MtWWS3THa19Mnb96iOGfpxOGwdmYNM-Xi0_zAEW9mTY=" id="restoImage" alt="Restaurant Banner"/>                      
                    <ul 
                        id="restoListings" 
                        key={resto.id}>
                            <h2 className="restoName">
                                {i+1}. {resto.restaurantName}
                            </h2>
                            <li id="starRatingOnRestoIndexPage">
                                <VisualAverageStarRating restaurant={resto} />
                            </li>
                            <li>
                                <RestaurantIndexItemButton cuisine={resto.cuisine} id="cuisineFilterButton" /> • {resto.price} • {resto.neighborhood}
                            </li>
                            <li>
                                <BsClock className="clockIcon" /> <RestoHoursSingleLine times={resto.hours} />
                            </li>
                            <li id="indexPageRestoReview">
                                <RestoIndexReview restaurantId={resto.id} />
                            </li>
                            <li>
                                <RestaurantAmenitiesListings name={resto.amenities}  />
                            </li>
                    </ul>
                </div>  
            </Link>
            )
        })
    );
}


export default RestaurantIndexItem;