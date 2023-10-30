import { useContext } from "react";
import { PRODUCT_URL } from "../utils/constant";
import  UserContext  from "../utils/UserContext";



const stylecard={
    backgroundColor:"#f0f0f0",
    borderRadius: "5px"
}


const RestaurantCard = (props) => {
    const {loggedInUser}=useContext(UserContext)
    
    // console.log(data);

    const { resName } = props;


    const matches = resName.info.costForTwo.match(/(\d+)/);
    const {cloudinaryImageId,name,cuisines,promoted,avgRating}=resName?.info;

    return (

        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200">
            <img className="rounded-lg" src={PRODUCT_URL+cloudinaryImageId}/>
            <h3 className="font-bold">{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>Rating: {avgRating}</h3>
            <h3>{resName.info.sla.deliveryTime} minutes..</h3>
            <h3>Cost for Two: ₹{matches[0]}</h3>
            <h3>{loggedInUser}</h3>
        </div>
    );
};



export const highorderCard=(RestaurantCard)=>{
    
    return (props)=>{
        
        return (
            
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard  {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;