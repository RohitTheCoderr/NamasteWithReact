// import CategoryItemList from "./CategoryItemList";

import CategoryItemiList from "./CategoryItemList";

// import React from "react";
const ResturentCategory = ({data})=>{
    console.log(data);
    return (
        <>
           <div>
               {/* accordian Header */}
            <div className="w-6/4 bg-gray-300 shadow-lg p-4 mx-auto my-4 " >
                <div className=" bg-slate-500 h-auto flex justify-between">
                   <span className="font-bold  text-lg">{data.title} ({data.itemCards.length})</span>
                   <span>⬇️</span>
                </div>
               {/* <CategoryItemiList item={data.itemCards}/> */}
                  <CategoryItemiList  items={data.itemCards}/>
            </div>
               {/* accordian Body */}

           </div>
        </>
    );
}
export default ResturentCategory;