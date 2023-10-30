import React from "react";
import { PRODUCT_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartSlice";


const Itemlist = ({items}) => {
console.log(items);
const dispatch=useDispatch()
const handleadditems=(item)=>{
    dispatch(additem(item))
    console.log(item);
}

    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex items-center">
                        <div className="p-2 m-2">
                            <span>{item.card.info.name}</span>
                            <span>- ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="ml-auto">
                            <div className="absolute">
                                <button className="p-2 bg-white rounded-lg shadow-lg"  onClick={()=>handleadditems(item)}>Add +</button>
                            
                            </div>
                            <img className="w-28 rounded-lg" src={PRODUCT_URL + item.card.info.imageId} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Itemlist;




















// import { Rescat } from "./Rescat";
// import { PRODUCT_URL } from "../utils/constant";

// export const Itemlist = ({ items }) => {
//     console.log(items);
//     return (
//         <div>
//             <ul>
//                 {items.map(item => (
//                     <li key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex items-center">
//                         <div className="p-2 m-2">
//                             <span>{item.card.info.name}</span>
//                             <span>- ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
//                             <p className="text-xs">{item.card.info.description}</p>
//                         </div>
//                         <div className="ml-auto">
//                         <div className="absolute">
//                         <button className="p-2 bg-white rounded-lg shadow-lg">Add +</button>
//                         </div>
//                             <img className="w-28 rounded-lg" src={PRODUCT_URL + item.card.info.imageId} alt="" />
                            
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };
