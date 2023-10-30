import React from "react";
import Itemlist from "./Itemlist";
import { useState } from "react";




const Rescat = (props) => {
    const { data } = props;
    const {showitems}=props;
    const {setshowIndex}=props;
    const handleClick=()=>{
        setshowIndex()
        
    }
    console.log(data);
    const { title, itemCards } = data;

    return (
        <div className="w-6/12 m-auto p-4 shadow-lg mx-auto my-4 bg-gray-50 font-bold rounded-lg">
            <div className="flex justify-between">
                <span className="font-bold cursor-pointer" onClick={handleClick}>{title} ({itemCards?.length})</span>
                <span className="cursor-pointer" onClick={handleClick}>⬇️</span>
            </div>
            {showitems && <Itemlist items={itemCards} />}
        </div>
    );
};

export default Rescat;






// import { Itemlist } from "./Itemlist";
// export const Rescat = (props) => {
//     const { data } = props;
//     const {title}=data;
//     return (
        
        
//         <div>
//         <div className=" w-6/12 m-auto p-4 shadow-lg mx-auto my-4  bg-gray-50 font-bold rounded-lg">
//         <div className="flex justify-between cursor-pointer" >
//         <span className="font-bold">{title} ({data?.itemCards?.length})</span>
//         </div>
//         <Itemlist items={data.itemCards}/>
//         </div>
//         </div>
//     );
// }








// export const Rescat=(props)=>{
    
//     const {data}=props;
//     console.log(title);
//     return <div>
//     <h1></h1>
        
//             </div>

// }
