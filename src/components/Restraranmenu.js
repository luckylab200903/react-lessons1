import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Rescat from "./Rescat";
import useResmenu from "../utils/useResmenu";
import { useState } from "react";

const Restratanmenu = () => {
    const { resId } = useParams();
    const resInfo = useResmenu(resId);
    const [showIndex, setshowIndex] = useState(null);
   
    if (!resInfo) {
        return <Shimmer />;
    }

    

    const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
    const itemCards = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center">
            <h1 className="p-4 m-4 text-3xl hover:text-4xl text-center drop-shadow-xl not-italic scale-75">{name.toUpperCase()}</h1>
            <h3 className="font-bold">{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            {categories.map((category, index) => (
                <Rescat key={category?.card?.card?.title} data={category?.card?.card} showitems={index === showIndex ? true : false}
                setshowIndex={()=>{setshowIndex(index)}}/>
            ))}
        </div>
    );
};

export default Restratanmenu;
















// import React from "react";
// import { useParams } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import Rescat from "./Rescat";
// import useResmenu from "../utils/useResmenu";
// import { useState } from "react";
// const Restratanmenu = () => {
//     const { resId } = useParams();
//     const resInfo = useResmenu(resId);

//     if (!resInfo) {
//         return <Shimmer />;
//     }

//     const [showIndex,setshowIndex]=useState(0);


//     const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
//     const itemCards = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
//     const categories = resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

//     return (
//         <div className="text-center">
//             <h1 className="p-4 m-4 text-3xl hover:text-4xl text-center drop-shadow-xl not-italic scale-75">{name.toUpperCase()}</h1>
//             <h3 className="font-bold">{cuisines.join(",")}</h3>
//             <h3>{costForTwoMessage}</h3>
//             {categories.map((category,index) => (
//                 {/* <Rescat key={category?.card?.card?.title} data={category?.card?.card} showitems={index===showIndex ? true : false/> */}
//                 <Rescat key={category?.card?.card?.title} data={category?.card?.card} showitems={index === showIndex?true:false} />

//             ))}
//         </div>
//     );
// };

// export default Restratanmenu;

















// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { useState,useEffect } from "react";
// import { Rescat } from "./Rescat";
// import useResmenu from "../utils/useResmenu"; 

// const Restratanmenu = () => {
//   const { resId } = useParams();
//   const resInfo = useResmenu(resId); 
//   if (resInfo === null) return <Shimmer />;
//   const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
//   const { itemCards } =
//     resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   // console.log(resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
//   const categories=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")


//   // console.log(categories);


//   return (
//     <div className="text-center">
//     <h1 className="p-4 m-4 text-3xl hover:text-4xl text-center drop-shadow-xl not-italic scale-75">{name.toUpperCase()}</h1>
//     <h3 className="font-bold">{cuisines.join(",")}</h3>
//     <h3>{costForTwoMessage}</h3>
//     {
//       categories.map((category)=>
//         <Rescat data={category?.card?.card}/>
//       )
//     }
//     </div>
//   );
// };

// export default Restratanmenu;












//       <h3>{costForTwoMessage}</h3>



// <ul>
// {itemCards.map((item) => (
//   <li key={item.card.info.id}>
//     {item.card.info.name} : {item.card.info.price / 100}
//   </li>
// ))}
// </ul>


























// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import { useState } from "react"; // Add this import
// import useResmenu from "../utils/useResmenu"; // Correct the import

// const Restratanmenu = () => {
//   // const [resInfo, setresInfo] = useState(null)

//   const { resId } = useParams();
//   const resInfo = useResmenu(resId); // Correct the function name
//   if (resInfo === null) return <Shimmer />;
//   const { name, cuisines, costForTwoMessage } = resInfo.cards[0].card.card.info;
//   const { itemCards } =
//     resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log(itemCards);
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h3>{cuisines.join(",")}</h3>
//       <h3>{costForTwoMessage}</h3>
//       <ul>
//         {itemCards.map((item) => (
//           <li key={item.card.info.id}>
//             {item.card.info.name} : {item.card.info.price / 100}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Restratanmenu;



































// import  Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestraranmenu from "../utils/useRestraranmenu";
// const Restratanmenu=()=>{

//   // const [resInfo,setresInfo]=useState(null)

//   const {resId}=useParams();
//   const resInfo=useRestraurantMenu(resId);
//   if( resInfo===null) return <Shimmer />
//   const {name, cuisines, costForTwoMessage }=resInfo.cards[0].card.card.info;
//   const {itemCards}=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//   console.log(itemCards)
//   return (<div>
//     <h1>{name}</h1>
//     <h3>{cuisines.join(",")}</h3>
//     <h3>{costForTwoMessage}</h3>
//     <ul>

//     {itemCards.map(item => (
//   <li key={item.card.info.id}>
//     {item.card.info.name} : {item.card.info.price / 100}
//   </li>
// ))}





//     </ul>
//   </div>)
// }

// export default Restratanmenu;





