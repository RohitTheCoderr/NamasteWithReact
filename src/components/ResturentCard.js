import { CDN_URL } from "../utils/constants";

const ResContainer= (props)=>{
    // console.log(props);
    const {resData}=props;
    const {name,cuisines,costForTwo,avgRating,sla, areaName,aggregatedDiscountInfoV3}=resData?.info;
   //  if(aggregatedDiscountInfoV3.length>=1){
   //    const {discountTag,header,subHeader}=aggregatedDiscountInfoV3;
   //  }
    
    return(
      <>
          <div className=" text-center w-[300px] h-auto rounded-lg bg-gray-250 m-4 p-2 ">
             {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.gridWidget.gridElements.infoWithStyle.restaurants[3].info.cloudinaryImageId}/> */}
             <div>
             <img className="w-[270px] h-[200] rounded-lg ml-1 " src={CDN_URL + resData.info.cloudinaryImageId}/>
             {/* <p className=" mt-[-1.5rem] font-bold text-green-200"> {header} {subHeader}</p> */}
             </div>
             <p className="font-bold font-poping">{name}</p>
             <div className="flex justify-evenly font-medium bg-gray-300"> 
                <p className="ptag">{costForTwo}</p>
                <h5 className="ptag rating">Rating: {avgRating} *</h5>
             </div>
             <h5 className="ptag deliveryT">DeliveryTime: {sla.deliveryTime} mins</h5> 
             <p><span className="font-bold text-red-500">Items:- </span>{cuisines.join(", ")}</p>
             <p><span className="font-bold text-red-500" >Loc:- </span>{areaName}</p>

          </div>
       </>
    )
}

// export const withPrometedLable=(ResContainer)=>{
//    return(props)=>{
//       return(
//          <>
//          <div>
//             <label>Prometed</label>
//             <ResContainer {...props}/>
//          </div>
//          </>
//       )
//    }
// }

export default ResContainer;