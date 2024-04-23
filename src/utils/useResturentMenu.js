import { useEffect, useState } from "react";
import { MENU_Api } from "../utils/constants";

const useResturentMenu= (resId)=>{
    const [resInfo, setResInfo]=useState(null)
useEffect(()=>{
    fetchData();
},[]);
console.log(resId);
console.log("menuApi",MENU_Api);
const fetchData = async () => {
        try {
                const menu = await fetch(MENU_Api+resId);
            console.log("menu data",menu);

            const jsonData = await menu.json();
            console.log("resturent data rohit", jsonData);
            setResInfo(jsonData);
            // setOptionVegOrNon(jsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.itemCards || []);
        } catch (error) {
            console.error("Error fetching menu:", error);
         // Optionally, you can set some error state here for user feedback
        }  
    } 
    console.log(" resInfo data",resInfo);
    return resInfo;
}
export default useResturentMenu;






