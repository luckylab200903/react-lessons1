import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearitems } from "../utils/cartSlice";

const Cart=()=>{

    const cardItem=useSelector((store)=>store.cart.items)
    console.log(cardItem);
    const dispatch=useDispatch()

    const handleclearcart=()=>{
        dispatch(clearitems())
    }
    return  (
    <div className="text-center m-4 p-4">
    <h1 className="text-xl font-bold">Cart</h1>
    <button className="m-4 p-4 text-white bg-black rounded-lg font-bold" onClick={handleclearcart}>Clear Cart</button>
    <div>{cardItem.length ?0:"cart is emtpy"}</div>
    <div className="m-auto w-6/12 border-spacing-3 border-black">
        <Itemlist items={cardItem}/>
        
    </div>
    </div>)
}

export default Cart;