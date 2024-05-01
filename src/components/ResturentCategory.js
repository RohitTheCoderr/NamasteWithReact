// import { useState } from "react";
import CategoryItemiList from "./CategoryItemList";

const ResturentCategory = ({ data, showItems, setShowIndex}) => {

// const [showItems, setShowItems]=useState(flase)

//   const handleClick = ()=>{
//     setShowItems(!showItems)      // es line se ye ho rha h ki agr showItems ki value pahle se flase ho to true ho jaye aur true ho to fase ho jaye jisse bar  bar call hone pr eski value true false hoti rahegi onclick hone pr jisse items show hide hoti rhegi niche condition ke hisab se 
//   }

const handleClick= ()=>{
    setShowIndex(!showItems)
}

  return (
    <>
      <div>
        {/* accordian Header */}
        <div className="w-6/4 bg-gray-300 shadow-lg p-4 mx-auto my-4 ">
          <div className=" bg-slate-500 h-auto flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold  text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          {showItems && <CategoryItemiList items={data.itemCards} />
          }
        </div>
        {/* accordian Body */}
      </div>
    </>
  );
};
export default ResturentCategory;
