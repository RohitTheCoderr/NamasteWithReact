import { CDN_URL } from "../utils/constants";
// import { CDN2_URL } from "../utils/constants";

const CategoryItemiList = ({ items }) => {
  console.log(items);
  return (
    <>
      <div>
        {items.map((item) => (
          <div
            key={item.card?.info?.id}
            className="border-b-2  border-gray-400 my-2 bg-gray-200 p-2 text-left flex justify-between"
          >
            <div className="w-[65%]">
              <div className="h-5 w-5 mb-1 border-2 border-green-700 rounded flex justify-center items-center ">
                <div className=" h-2 w-2 bg-green-800 rounded-full "></div>
              </div>
              <div className="font-poping text-[18px] text-start ">
                <span className="font-poping text-[22px]">
                  {item.card?.info?.name}
                </span>
                <br></br>
                {item.card?.info?.price ? (
                  <span>
                    <span className="text-red-500">
                      ₹ {item.card?.info?.price ? item.card?.info?.price/ 100 : item.card?.info?.defaultPrice/100}
                    </span>
                    <br></br>{" "}
                  </span>
                ) : (
                  <span>https://www.swiggy.com/restaurants/chaudharys-sector-15-faridabad-34419</span>
                )}
                {item?.card?.info?.ratings?.aggregatedRating?.rating ? (
                  <span className="text-green-800 font-bold text-[20px] my-0">
                    * {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              <p className="text-[16px] text-left text-gray-500">
                {item.card.info.description}
              </p>
            </div>
            <div className=" w-2/6 flex items-center justify-center">
            {/* {item.card?.info?.imageId} */}
              <img
                className=" rounded-lg w-48 h-32"
                src={CDN_URL +item.card?.info?.imageId}
                // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ae990bf37eaecb24eb9f0a9b46dff97f"
                alt={item?.card?.info?.name}
              />
            </div>
          </div>
        ))}
        {/*  peuse video at 1:20:00  part 11*/}
      </div>
    </>
  );
};

export default CategoryItemiList;
