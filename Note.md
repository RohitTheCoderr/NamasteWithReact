# Note: 
  when ever we use array map method then we must we use a unique key like here==>> key={restaurant.info.id}  
         



<!-- 

         import React, { useEffect, useState } from "react";
import Shimmer from "./shimmer";

function RestaurantMenu() {
    const [restu, setRestu] = useState(null);
    const [optionVegOrNon, setOptionVegOrNon] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=349817&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
            const jsonData = await menu.json();
            setRestu(jsonData.data);
            setOptionVegOrNon(jsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || []);
        } catch (error) {
            console.error("Error fetching menu:", error);
            // Optionally, you can set some error state here for user feedback
        }
    };

    const handleFilterVeg = () => {
        const vegFilter = restu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.filter((val) => val.card.info.isVeg === true) || [];
        setOptionVegOrNon(vegFilter);
    };

    if (!restu) {
        return <Shimmer />;
    }

    const { name, locality, city, cuisines, costForTwoMessage } = restu.cards[2]?.card?.card?.info || {};

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(', ')} - {costForTwoMessage}</p>
            <h2>Location: {locality} - {city}</h2>

            <button className="searchBtn" onClick={handleFilterVeg}>For Veg</button>

            <h2>Menu</h2>
            <ul>
            {Array.isArray(optionVegOrNon) && optionVegOrNon.map((val) => (
    <li key={val.card.info.id}>{val.card.info.name} - Rs: {val.card.info.price / 100}</li>
))}
            </ul>
        </div>
    );
}

export default RestaurantMenu; -->







<!-- old datata a a a a a a  a aa  a a a a a  a a  -->


<!-- 
import { useEffect, useState } from "react";
// import { CDN_URL } from "../utils/constants";
import Shimmer from "./shimmer";

function ResturentMenu (){
const [restu, setRestu]=useState(null)
// const [optionVegOrNon, setOptionVegOrNon]= useState()
useEffect(()=>{
    fetchMenu()
},[])

// let upi= "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=349817&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"

const fetchMenu =async()=>{
    
    const menu = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=349817&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER")
    const jsonData = await menu.json();
    setRestu(jsonData.data);
    //    const itemdata = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
    //    setOptionVegOrNon(itemdata)
}

if ( restu===null) {
    return  <Shimmer/>
}
const {name, id,locality,city,cuisines,costForTwoMessage}= restu?.cards[2]?.card?.card?.info;
const {itemCards}= restu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
console.log("hiii");
    return(
        <>        
         <div className="menu"> 
        <h1>{name}</h1>
        <p>{cuisines.join((val)=>{val})}- {costForTwoMessage}</p>
        <h2>Localion:- {locality} - {city}</h2>

 <button className="serachBtn"
             onClick={()=>{
                 const  vegFilter = optionVegOrNon.filter((val)=>val.card.info.isVeg === 1);
                 //  console.log(itemCards.filter((val)=>val.card.info.isVeg === 1));
                 //  console.log(vegFilter);
                 setOptionVegOrNon(vegFilter)
                }}>For-veg</button>
        
                <h2>Menu</h2>
        <ul> 
           
               { itemCards.map((val)=>{
                                return <li key={val.card.info.id}>{val.card.info.name} - Rs:- {val.card.info.price/100}</li>
                               })}
                                        </ul>
        </div> 
        </>
    );
};

export default ResturentMenu;
 -->




<!-- 
<div>
                    {optionVegOrNon || [].map((val) => {
                        return <div key={val.card.info.id}  className="menuDiv"><ul><li>{val.card.info.name}</li><li> Rs:- {val.card.info.price / 100}</li></ul> <img className="menuImg" src={CDN_URL + val.card.info.imageId}/></div>
                    })}
                </div> -->




                <!-- ++++++++++++++++++++++++ before custum own hooks +++++++++++++++++++++++++++++++++ -->

import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_Api } from "../utils/constants";

function ResturentMenu() {
    const [restu, setRestu] = useState(null)
    const {resId} = useParams()
    const [optionVegOrNon, setOptionVegOrNon] = useState([])
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const menu = await fetch(MENU_Api+resId);
            const jsonData = await menu.json();
            setRestu(jsonData.data);
            setOptionVegOrNon(jsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.itemCards || []);
        } catch (error) {
            console.error("Error fetching menu:", error);
         // Optionally, you can set some error state here for user feedback
        }  
    }   
    const { itemCards } = restu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || [];
    // console.log(itemCards);
    if (restu === null) {
        return <Shimmer />
    }
    const { name, locality, city, cuisines, costForTwoMessage } = restu.cards[2]?.card?.card?.info || {};
    return (
        <>
            <div className="menu">
                <h1>{name}</h1>
                {/* (val) => {val} */}
                <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
                <h2>Localion:- {locality} - {city}</h2>

                <button className="serachBtn"
                    onClick={() => {
                        const vegFilter = itemCards.filter((val) => val.card.info.isVeg === 1);
                        setOptionVegOrNon(vegFilter)
                    }}>Click For Veg</button>

                <button className="serachBtn"
                    onClick={() => {
                        const nonVegFilter = itemCards.filter((val) => val.card.info?.itemAttribute?.vegClassifier === "NONVEG");
                        setOptionVegOrNon(nonVegFilter)
                    }}>Click For Non-Veg</button>

                <button className="serachBtn"
                    onClick={() => {
                        setOptionVegOrNon(itemCards)
                    }}>Both veg $ N-veg</button>

                <h2 id="menu">Menu Of This Resturent</h2>
                <div>
                    {optionVegOrNon.map((val) => {
                        return <div key={val.card.info.id}  className="menuDiv"><ul className="ulofItem"><li>{val.card.info.name}: -  <span className="veg">{val.card.info?.itemAttribute?.vegClassifier}</span></li><li> Rs:- {val.card.info.price / 100}</li></ul>
                        <p className="discription">{val.card.info?.description}</p>
                        <div className="imgdiv"> 
                        <img className="menuImg" src={CDN_URL + val.card.info.imageId}/>
                        </div>
                        </div>
                    })}
                </div> 
            </div>
        </>
    );
};

export default ResturentMenu;


<!--  feching data by using node.js and Express -->

const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/swiggy-data', async (req, res) => {
  try {
    const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching Swiggy data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






<!-- chat gtp data    ++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

// Removed the commented import as it's no longer needed
import ResContainer from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyLayout = () => {
  const [resListData, setResListData] = useState([]);
  const [filteredListResturent, setFilteredListResturent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("before try");
    try { console.log("run try");
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {mode: 'no-cors'});
      if (!response.ok) throw new Error('Network response was not ok');
      console.log(response+"hello");
      const jsondata = await response.json();
      console.log(jsondata);
      const alldata = jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResListData(alldata);
      setFilteredListResturent(alldata);
    } catch (error) {
      console.error("Error fetching menuData Rohit:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>Looks like you are Offline</h1>;

  const handleSearch = () => {
    const filteredResturent = resListData.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredListResturent(filteredResturent.length > 0 ? filteredResturent : ["No Item Found!!!"]);
  };

  const handleTopRated = () => {
    const filteredList = resListData.filter((res) => res.info.avgRating > 4);
    setFilteredListResturent(filteredList);
  };

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="body">
      <div className="filter">
        <div className="search-bar">
          <input className="serachInput" type="text" placeholder="Search Item here" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="serachBtn" onClick={handleSearch}>search</button>
        </div>
        <button className="serachBtn" onClick={handleTopRated}>Top rated restro</button>
      </div>
      <div id="res-container">
        {filteredListResturent.map((restaurant) => (
          typeof restaurant === 'string' ? <p key="no-item">{restaurant}</p> : <Link key={restaurant.info.id} to={"/resturent/" + restaurant.info.id}><ResContainer resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default BodyLayout;



<!-- old  style of index.css file  -->


body{
    background-color: #e5dfdf;
    color: rgb(0, 0, 0);
}
#header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: chartreuse;
    color: black;
    border: 2px solid red;

}
#logodiv{width: 15%;
/* background-color: gray; */
text-align: center;
}
#logoImg{
height: 110px;
}

.search-bar{
    width: 40%;
    /* background-color: blue; */
    border-radius: 10px;
}
.serachInput{
    height: 2rem;
    width: 71%;
    border-radius: 10px;

}
.serachBtn{
    height: 2rem;
    width: auto;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    color: red;
}
#navbardiv{width: 40%;
/* background-color: orange; */
}
#body{
    text-align: center;
}
#nav-items{
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    font-size: 20px;
    list-style-type: none;
}

#res-container{
    display: flex;
    justify-content: center;
   flex-wrap: wrap;
    padding: 10px;
    margin-top: 5px;
}
.item-div{
    height: auto;
    width: 15rem;
    border-radius: 5px;
    margin:5px;
    padding: 5px;
    background-color: rgb(181, 181, 181);
    text-decoration: none;
}
.item-div:hover{
    /* border: 1px solid rgb(0, 0, 0); */
    background-color: rgb(0, 0, 0);
    cursor: pointer;
    color: rgb(181, 181, 181);
    .rating{
        color: rgb(255, 255, 255);
    }
}
.item-div img{
    height: 200px;
    width: 100%;
    border-radius: 10px;
}

.cost-rate{
    display: flex;
    justify-content: space-evenly;
}
.ptag{
    margin: 6px;
    font-size: 18px;
    /* color: green; */
}
.deliveryT{
    color: red;
}
.rating{
    padding: 5px;
    border-radius: 5px;
    border:1px solid green;
    background-color: rgb(64, 196, 64);
}
/* header link tag like home about etc */
#nav-items{

color: red;
}

/* esturentMenuCards        */
.menu{
    height: auto;
    width: 100vw;
    padding: 10px;
  text-align: center;
}
#resName{
    color: green;

}
/* .menu p{color: blue; font-size: 18px;} */

.menuDiv{
    height:auto;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3px;
    background-color: rgb(187, 204, 187);
    margin-bottom: 0.5rem;
}
#menu{
color: green;
background-color: rgb(171, 226, 98);
}
.veg{
    color: red;
}
.ulofItem{
    width: 35%;
    list-style: none;
    font-size: 22px;
    font-style: italic;
    font-weight: bold;
}
.discription{
    width: 40%;
    color: rgb(78, 73, 73);
    font-size: 18px;
}
.imgdiv{
width: 25%;    
}
.menuImg{
    height: 150px;
    width: 250px;
border-radius: 8px;
}

/*  Shimmer page style */
.shimmer-cards-container{
    display: flex;
    justify-content: center;
   flex-wrap: wrap;
    padding: 10px;
    margin-top: 5px;
}
.shimmer-card{
width: 15rem;
height: 20rem;
border-radius: 5px;
margin:5px;
padding: 5px;
background-color: rgb(196, 196, 196);
}
.loginBtn{
    padding: 2px 10px;
    background-color: tomato;
    color: black;

}

/* Footer content style */

#footerSection{
background-color: black;
height: auto;
padding: 10px;
/* align-items: center; */
text-align: center;
}
.footerH2{
color:  green;

}
.footerP{
    color: white;
    font-size: 15px;
}

/* User component ++++++++++++++++++++++ */
#AboutPage{
    background-color: #b9b2b2;
    text-align: center;
}
#user-card{
border: 2px solid black;
border-radius: 10px;
padding: 10px;
text-align: center;
}
#user-card h2{
    color: rgb(0, 102, 255);
    font-style: italic; 
}
#user-card span{
font-size: 20px;
color: green;
}
.UserImg{
    height: 200px;
    width: 150px;
    border: 2px solid black;
    border-radius: 7px;
    transition: all 2s;

}
.UserImg:hover{
transform: scale(1.2);
}



<!-- __________________________Body component before modify it ______________________ -->


// import resList from "../utils/Api_MockData";   // after fetch data we no need this resList data because we have a live data
import ResContainer from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HOMEPAGE_APi } from "../utils/constants";


const BodyLayout =()=>{
  // const [resListData, setResListData] = useState(resList) // agr ham yha resList ko dalte h to pahle ye resList ki data render hoga jaise hi json ki data fetch ho jayega fir ye hat jayega 
  const [resListData, setResListData] = useState([])   

  const[filteredListResturent, setFilteredListResturent]=useState([])
      // but agr ham  rha kuch bi nhi dalte h to page load hote h to direct json ki data aayegi jab tak ye data fetch nhi hogi jab tak ye page empty rahegi 
  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
   // https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
   try {
     const data =await fetch(HOMEPAGE_APi);
      const jsondata = await data.json();
      const alldata= jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setResListData(alldata);
      setFilteredListResturent(alldata);
    
   } catch (error) {
    console.error("Error fetching in menudata:", error);
   }
  }

  const onlineStatus =useOnlineStatus();
  if (onlineStatus===false) return(<h1>Looks like yu're Offline please check your internet connections</h1>)
  //  now we no need of declared of conditional rendering diffrent place because we use in turnery oprator below 
  
    return resListData.length=== 0 ? (
    <Shimmer/>
    )
    :
  (
        <div id="body"  className="my-4 px-2 py-4">
             <div className="filter flex justify-evenly">
                <div className="flex align-middle " >
                        <input className="w-[300px] h-10 rounded-lg bg-gray-200 px-2 mx-2 " type="text" placeholder="Search Item here" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button className=" w-auto bg-orange-500 rounded-xl border-4 px-3 font-bold " onClick={()=>{
                       const filteredResturent =resListData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                       setFilteredListResturent(filteredResturent)}}
                       >search</button>
                </div>
                <div className="flex align-middle">
                      <button className="serachBtn  w-auto bg-orange-500 rounded-xl border-4 px-3 font-bold "
                       onClick={()=>{
                         const  filteredList = resListData.filter((res)=>res.info.avgRating > 4);
                         setFilteredListResturent(filteredList);
                        }}>Top rated restro</button>
                </div>
            </div>
          <div className="flex flex-wrap justify-center w-[300px] h-auto my-4 p-2 bg-red-300 "> 
          {filteredListResturent < 1 ? <p className=" font-bold bg-green-500">Data Not Found!!!</p> :
           (filteredListResturent.map((restaurant) =>(<Link key={restaurant.info.id} to={"/resturent/"+restaurant.info.id}><ResContainer  resData={restaurant}/></Link>))
          )}  
           </div>         
        </div>
    )
}
export default BodyLayout;


