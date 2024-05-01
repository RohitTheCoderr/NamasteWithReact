import { useState, useEffect } from "react"; // Importing useEffect for fetching data
// import { CDN_URL } from "../utils/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";
import { DeleveryBoy } from "../utils/constants";
import ResturentCategory from "./ResturentCategory";

function ResturentMenu() {
    const [optionVegOrNon, setOptionVegOrNon] = useState([]); // Initializing state for menu options
    const [filterVandN, setFilterVandN]= useState([])

    const[categories , setCategories]=useState([])
// for Items list Show And Hide
//  const [visible, setVisible]=useState(false)
// const toggleItems= ()=>{
//     setVisible(!visible);
// }

const [showIndex, setShowIndex]=useState(0)



    const { resId } = useParams();
    // Fetching restaurant menu using custom hook
    const restu = useResturentMenu(resId);
    // Using useEffect to update the menu options when restu changes
    useEffect(() => {
        if (restu) {
            const { itemCards } = restu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || [];
            setOptionVegOrNon(itemCards);
            setFilterVandN(itemCards)
            // console.log("category", restu.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            const ItemsCategories = restu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
            // console.log("this is categories",ItemsCategories);
      setCategories(ItemsCategories)
        }
    }, [restu]);
    
    // console.log("useState Categories", categories);

    if (restu === null) {
        return <Shimmer />;
    }
// console.log("list==>",restu.data.cards[2]?.card?.card?.info);
    const { name, locality, city, cuisines, costForTwoMessage, avgRating, totalRatingsString , sla,feeDetails} = restu.data.cards[2]?.card?.card?.info || {};
    const {deliveryTime,slaString,lastMileTravelString}=sla
// console.log("message:===",feeDetails.message);
// console.log("delevery deytails",feeDetails);
    return (
        <>
        <div className="flex  justify-center items-center text-center">
            <center className="w-3/5">
              <div className=" h-auto  mx-2rem m-4 py-4 ">
                  <h1 className="text-black font-poping font-bold text-start text-3xl">{name}</h1>
                  <div className=" h-52  border-gray-400 shadow-xl shadow-gray-500 rounded-2xl text-start px-4 bg-slate-100 my-4">
                      <div className="flex gap-2">
                         <div className="h-5 w-5 bg-green-500 rounded flex justify-center mt-1 text-white text-xl">*</div>
                         <p>{avgRating} <span>({totalRatingsString})</  span> - {costForTwoMessage}</p>
                      </div>
                      <p className="text-orange-600 font-serif font-semibold underline">{cuisines.join(", ")}</p>
                      <div className="flex my-3">
                          <div className="mr-4">
                            <div className="h-2 w-2 rounded-full bg-slate-400 mt-1.5"></div>
                            <div className="h-6 w-0.5 bg-slate-400 ml-0.5 "></div>
                            <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                          </div>
                          <div>
                           <h2 className="font-thin"><span className="font-bold mr-2 pb-1">Outlet</span> {locality} - {city}</h2>
                           <p className="font-bold pt-1">{slaString}</p>
                          </div>
                      </div>
                      <div className="border-t-[1px] border-gray-400 flex" ><img className="h-6 mt-4 mr-4" src={DeleveryBoy} alt="dele" /><p className="mt-4">{feeDetails.message}</p></div>
                   </div>
                   <button className=" my-4 bg-orange-500  rounded-full h-10 px-4" onClick={() => {
                    // const vegFilter = optionVegOrNon.filter((val) => val?.card?.info?.isVeg === 1);
                    const vegFilter = filterVandN.filter((val) => val?.card?.info?.isVeg === 1);
                    setOptionVegOrNon(vegFilter);
                   }}>Click For Veg</button>

                   <button className="my-4 mx-2 bg-green-500 rounded-full h-10 px-4" onClick={() => {
                    // const nonVegFilter = optionVegOrNon.filter((val) => val?.card?.info?.itemAttribute?.vegClassifier === "NONVEG");
                    const nonVegFilter = filterVandN.filter((val) => val?.card?.info?.itemAttribute?.vegClassifier === "NONVEG");
                    setOptionVegOrNon(nonVegFilter);
                    }}>Click For Non-Veg</button>

                    <button className="my-4  bg-red-600 rounded-full h-10 w-auto px-4" onClick={() => {
                    const { itemCards } = restu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card || [];
                    setOptionVegOrNon(itemCards);
                    }}>Both Veg & Non-Veg</button>

                   <h2 className="bg-sky-300 py-2 rounded-lg text-blue-900 text-lg my-2 ">Menu Of This Restaurant</h2>
                  {/* <div  className="text-start font-bold ">Recommended ( <span>{optionVegOrNon.length}</span> )
                       <div className="flex justify-end w-4/5">
                          <button onClick={toggleItems} className="px-1 text-2xl bg-gray-200 rounded-sm rotate-90  ">{visible ? '<' : '>'}</button>
                       </div>
                       <div className={` my-4 ${visible ? 'hidden' :''}`}>
                            {optionVegOrNon < 1 ? <p className=" font-bold bg-rose-500 px-8 py-4 text-lg">No Items Found !!!</p> :                   
                            (optionVegOrNon.map((val) => (
                            <div key={val?.card?.info?.id} className="flex h-auto w-full justify-between items-center my-4 p-2 pb-8 border-b-2 border-slate-300 bg-slate-50">
                    
                              <div className="w-3/4  text-left px-4 ">
                                <div className="h-5 w-5 mb-1 border-2 border-green-700 rounded flex justify-center items-center">
                                    <div className=" h-2 w-2 bg-green-800 rounded-full "></div>
                                </div>
                                <ul>
                                   <li className="font-bold italic text-base">{val?.card?.info?.name}: - <span className="bg-green-500 px-1 font-popins text-xs text-white">{val?.card?.info?.itemAttribute?.vegClassifier}</span></li>
                                   <p className="text-blue-500"> Rs:- {val.card.info.price / 100}</p>
                                </ul>
                                <p className="font-thin text-xs">{val?.card?.info?.description}</p>
                              </div>
                              <div className=" w-2/6 flex items-center justify-center">
                                <img className=" rounded-lg w-48 h-32" src={CDN_URL + val.card.info.imageId} alt={val.card.info.name} />
                              </div>
                            </div>
                           )))}
                        </div>
                    </div>
                    */}

                   <div>
                      {
                        categories.map((category, index)=>(
                          // control component 
                          <ResturentCategory key={category?.card?.card?.title}
                          data={category?.card?.card} 
                          showItems={index=== showIndex ? true : false}
                          setShowIndex={()=>setShowIndex(index)}
                          />
                         ))
                      }
                   </div>
                   {/* <h1><ResturentCategory/></h1> */}
              </div>
         </center>
     </div>  
        </>
    );
}

export default ResturentMenu;
