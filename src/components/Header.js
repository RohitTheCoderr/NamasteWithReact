import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header =()=>{
    const [loginBtn, setLoginBtn]= useState("Login")
    const onlineStatus=useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    //  subscribing to the store using a selector
    const cartItems= useSelector((store)=>{store.cart.items})

    const liStyle = "p-1 m-1 h-10 font-bold cursor-pointer "   // this is use for only tailwind style as variable
    return(
        <div className="flex justify-between bg-slate-400 w-full h-[150px]">
            <div className=" w-auto ">
                <img className="w-32 " src={LOGO_URL}/>
            </div>
            <div className="items-center w-auto flex justify-around  px-2">
                <ul className="flex  ">
                    <li className={liStyle}>Online_Status: {onlineStatus ? "🥰":"🥺"}</li>
                    <li className={liStyle}><Link to={'/'}>Home</Link></li>
                    <li className={liStyle}><Link to={'/about'}>About</Link></li>
                    <li className={liStyle}><Link to="/contact">Contact</Link></li>
                    <li className={liStyle}><Link to="/grocery">Grocery</Link></li>
                    <li className="p-1 m-1 h-10 font-bold cursor-pointer text-green-700 ">Cart ({cartItems.length} item)</li>
                    <li className="font-bold text-orange-600">{loggedInUser}</li>
                    {/* <li className={liStyle} >Sign</li> */}
                </ul>
            <div className=""> 
                 <button className="text-center w-24 px-3 bg-orange-500 border-2 ml-4 rounded-lg" onClick={()=>{loginBtn==="Login" ? setLoginBtn("Logout"):setLoginBtn("Login")}}>{loginBtn}</button>
            </div>
            </div>
        </div>
    )
}

export default Header;