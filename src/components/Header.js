import React, { useState, useEffect ,createContext, useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlinestatus = useOnline();
  const {loggedInUser}=useContext(UserContext);
  console.log(loggedInUser);

  useEffect(() => {
    console.log("useEffect called");
  }, []);
  const cartItems=useSelector((store)=>
    store.cart.items
)
console.log(cartItems);
  return (
  
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="logo-container">
          <div className="w-24 h-20">
            <img src={LOGO_URL} alt="Logo" />
          </div>
        </div>

        <div className="nav-bar bg-pink-200">
          <ul className="flex space-x-4 p-4 m-4">
            <li className="px-3">
              Online Status: {onlinestatus ? '🟢' : '🔴'}
            </li>
            <li className="px-3">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-3">
              <Link to="/cart">Cart ({cartItems.length} items)</Link>
            </li>

            <li className="px-3">
              <Link to="/grocery">Grocery</Link>
            </li>
            <button
              className="button-container"
              onClick={() => {
                buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login");
                console.log("Header rendered");
              }}
            >
              {buttonName}
            </button>
            <li className="px-3 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
