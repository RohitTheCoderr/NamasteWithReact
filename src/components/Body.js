// import resList from "../utils/Api_MockData";   // after fetch data we no need this resList data because we have a live data
import ResContainer from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { HOMEPAGE_APi } from "../utils/constants";


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
     const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsondata = await data.json();
      console.log(jsondata);
      const alldata= jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setResListData(alldata);
      console.log(alldata);
      setFilteredListResturent(alldata);
    
   } catch (error) {
    console.error("Error fetching in menudata:", error);
   }
  }

  const onlineStatus =useOnlineStatus();
  if (onlineStatus===false) return(<h1>Looks like yu're Offline please check your internet connections</h1>)
  //  now we no need of declared of conditional rendering diffrent place because we use in turnery oprator below 
  
    return resListData.length== 0 ? (
    <Shimmer/>
    )
    :
  (
        <div id="body"  className="my-4 px-2 py-4">
             <div className="flex justify-evenly">
                <div className="flex align-middle " >
                        <input className="w-[300px] h-10 rounded-lg bg-gray-200 px-2 mx-2 " type="text" placeholder="Search Item here" value={searchText} onChange={(e)=>{ setSearchText(e.target.value)}}/>
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
          <div className="flex flex-wrap justify-center h-auto my-4 bg-gray-100 rounded-lg"> 
          {filteredListResturent < 1 ? <p className=" font-bold bg-rose-500 px-8 py-4 text-lg">No Items Found !!!</p> :
           (filteredListResturent.map((restaurant) =>(<Link key={restaurant.info.id} to={"/resturent/"+restaurant.info.id}><ResContainer  resData={restaurant}/></Link>))
          )}  
           </div>         
        </div>
    )
}
export default BodyLayout;