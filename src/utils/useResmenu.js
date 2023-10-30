import { useState,useEffect } from "react";

const useResmenu=(resId)=>{

      const[resInfo,setresInfo]=useState(null);
      useEffect(()=>{
        fetchdata();
      },[])


        const fetchdata=async ()=>{
            const data=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2124007&lng=78.1772053&restaurantId="+resId)
            const json=await data.json();
            console.log(json)
            setresInfo(json.data)
      }
      return resInfo;

}

export default useResmenu;















