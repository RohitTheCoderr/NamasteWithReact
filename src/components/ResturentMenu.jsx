import { useState, useEffect } from "react"; // Importing useEffect for fetching data
import { CDN_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";

function ResturentMenu() {
    const [optionVegOrNon, setOptionVegOrNon] = useState([]); // Initializing state for menu options
    const [filterVandN, setFilterVandN]= useState([])
    const { resId } = useParams();
    console.log("This is resID", resId);
    // Fetching restaurant menu using custom hook
    const restu = useResturentMenu(resId);
console.log("restu", restu);
    // Using useEffect to update the menu options when restu changes
    useEffect(() => {
        if (restu) {
            console.log("after restu.data", restu.data);
            const { itemCards } = restu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || [];
            setOptionVegOrNon(itemCards);
            setFilterVandN(itemCards)
            console.log("items cards",itemCards);
        }
    }, [restu]);

    if (restu === null) {
        return <Shimmer />;
    }

    const { name, locality, city, cuisines, costForTwoMessage } = restu.data.cards[2]?.card?.card?.info || {};
console.log(" hello option", optionVegOrNon);
    return (
        <>
        <div className="flex w-full justify-center ">
            <div className=" h-auto w-10/2 mx-2rem bg-green-400">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h2>Location: {locality} - {city}</h2>

                <button className="searchBtn bg-orange-500" onClick={() => {
                    const vegFilter = optionVegOrNon.filter((val) => val?.card?.info?.isVeg === 1);
                    // const vegFilter = filterVandN.filter((val) => val?.card?.info?.isVeg === 1);
                    setOptionVegOrNon(vegFilter);
                }}>Click For Veg</button>

                <button className="searchBtn bg-green-500" onClick={() => {
                    // const nonVegFilter = optionVegOrNon.filter((val) => val?.card?.info?.itemAttribute?.vegClassifier === "NONVEG");
                    const nonVegFilter = filterVandN.filter((val) => val?.card?.info?.itemAttribute?.vegClassifier === "NONVEG");
                    setOptionVegOrNon(nonVegFilter);
                }}>Click For Non-Veg</button>

                <button className="searchBtn bg-red-600" onClick={() => {
                    const { itemCards } = restu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || [];
                    setOptionVegOrNon(itemCards);
                }}>Both Veg & Non-Veg</button>

                <h2 id="menu">Menu Of This Restaurant</h2>
                <div>
                   {optionVegOrNon < 1 ? <p className=" font-bold bg-rose-500 px-8 py-4 text-lg">No Items Found !!!</p> :                   
                    (optionVegOrNon.map((val) => (
                        <div key={val?.card?.info?.id} className="menuDiv">
                            <ul className="ulofItem">
                                <li>{val?.card?.info?.name}: - <span className="veg">{val?.card?.info?.itemAttribute?.vegClassifier}</span></li>
                                <li> Rs:- {val.card.info.price / 100}</li>
                            </ul>
                            <p className="description">{val?.card?.info?.description}</p>
                            <div className="imgdiv">
                                <img className="menuImg" src={CDN_URL + val.card.info.imageId} alt={val.card.info.name} />
                            </div>
                        </div>
                    )))}
                </div>
            </div>
        </div>  
        </>
    );
}

export default ResturentMenu;
