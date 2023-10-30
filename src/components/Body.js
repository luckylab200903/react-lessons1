import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { Link } from "react-router-dom";
import Shimmer from './Shimmer';
import useOnline from '../utils/useOnline';
import { highorderCard } from "./RestaurantCard";

const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText, setsearchText] = useState('');

  const RestaurantCardPromoted=highorderCard(RestaurantCard);

  const fetchdata = async () => {
    const data = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=18.5204303&lng=73.8567437');
    const json = await data.json();
    setlistofres(json?.data?.success.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  };
  console.log(listofres);

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSearch = () => {
    const filteredRestaurants = listofres.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setlistofres(filteredRestaurants);
  };

  const handleTopRated = () => {
    const filteredList = listofres.filter((res) => res.info.avgRating > 3.5);
    setlistofres(filteredList);
    console.log(filteredList[0].info.id)
  };

  const onlinestatus = useOnline();

  if (onlinestatus === false) {
    return <h1>Looks like you are offline. Please check your connection.</h1>
  }

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="Search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-blue-950"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button className="px-3 m-4 bg-green-500 rounded-lg" onClick={handleSearch}>Search</button>
          <button className="px-4 bg-slate-500" onClick={handleTopRated}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="flex m-12  flex-wrap">
        {
          listofres.map((restaurant, index) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
          {restaurant.info.promoted?<RestaurantCardPromoted   resName={restaurant}/>: <RestaurantCard key={index} resName={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
