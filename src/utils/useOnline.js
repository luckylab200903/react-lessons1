import { useEffect ,useState} from "react";

const useOnline=()=>{
    const[onlinestatus,setOnlinestatus]=useState(true)
    
    useEffect(()=>{

    window.addEventListener("offline", (event) => {
            setOnlinestatus(false)
    });
    window.addEventListener("online", (event) => {
        setOnlinestatus(true)
});


})


    return onlinestatus;
}

export default useOnline;


//console.log("You are now connected to the network.");