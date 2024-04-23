
function Shimmer(params) {
    const shimmerStyle="w-[300px] h-[400px] bg-gray-100 m-2 p-3  "
    return (
    <>
           <div className="filter flex justify-evenly my-8">
                <div className="flex align-middle " >
                        <input className="w-[300px] h-10 rounded-lg bg-gray-200 px-2 mx-2 " type="text"/>
                        <button className=" w-[100px] bg-gray-200 rounded-xl  px-3 " ></button>
                </div>
                <div className="flex align-middle">
                      <button className="serachBtn  w-[200px] bg-gray-200 rounded-xl  px-3 "></button>
                </div>
            </div>
        <div className="flex flex-wrap justify-center mt-4">
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                   
            <div className={shimmerStyle}></div>                                                  
        </div>
     </>
    );
}
export default Shimmer;