
const AboutTheRestaurant = ({about}) => {

    if (!about || about === "") {
        return <p>This restaurant currently does not have an About The Restaurant blurb.</p>
    } else {
        return <p>{about}</p>
    }
   

}

export default AboutTheRestaurant