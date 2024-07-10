
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ResContainer= (props)=>{
    const {resData}=props;
    const {name,cuisines,costForTwo,avgRating,sla, areaName,aggregatedDiscountInfoV3}=resData?.info;
   const {loggedInUser}=useContext(UserContext)
   
    return(
      <>
          <div className=" text-start w-[300px] h-auto rounded-lg bg-gray-250 m-4 p-2 ">
             {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.gridWidget.gridElements.infoWithStyle.restaurants[3].info.cloudinaryImageId}/> */}
             <div>
             <img className="w-[270px] h-[200] rounded-lg ml-1 " src={CDN_URL + resData.info.cloudinaryImageId}/>
             <p className=" mt-[-1.5rem] font-bold text-green-200 bg-black absolute px-2 ml-1"> {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}</p>
             </div>
             <p className="font-bold font-poping">{name}</p>
             <div className="flex justify-evenly font-medium bg-gray-200"> 
                <p className="ptag">{costForTwo}</p>
                <h5 className="">Rating: <span className="text-green-700 bg-slate-100 px-2">{avgRating} *</span></h5>
             </div>
             <h5 className="ptag deliveryT">DeliveryTime: {sla.deliveryTime} mins</h5> 
             <p><span className="font-bold text-red-500">Items:- </span>{cuisines.join(", ")}</p>
             <p><span className="font-bold text-red-500" >Loc:- </span>{areaName}</p>
             <p><span className="font-bold text-blue-500" >User:- </span>{loggedInUser}</p>
          </div>
       </>
    )
}

// export const withPrometedLable=(ResContainer)=>{
//    return(props)=>{
//       return(
//          <>
//          <div>
//             <label className="font-bold text-yellow-600 absolute">Prometed</label>
//             <ResContainer {...props}/>
//          </div>
//          </>
//       )
//    }
// }

export default ResContainer;