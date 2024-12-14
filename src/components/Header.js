import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //  subscribing to the store using a selector
  const cartItems = useSelector((store) => store?.cart?.items);
  //  console.log(cartItems);
  const liStyle = " h-10 cursor-pointer w-auto "; // this is use for only tailwind style as variable
  return (
    <div className="flex justify-between bg-teal-950 w-full h-[150px]">
      <div className=" w-[17%] flex justify-center ">
        <img className="w-32 " src={LOGO_URL} />
      </div>
      <div className="w-[80%] flex justify-around items-center">
        <ul className="flex  gap-2 ">
          <li className={`text-[12px] text-white mt-1 ${liStyle}`}>
            Online_Status: {onlineStatus ? "🥰" : "🥺"}
          </li>
          {/* <li className={liStyle}><Link to={'/'}>Home</Link></li> */}
          {/* by suing navlink  */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-1 m-1 h-10 cursor-pointer w-auto  border-gray-800 text-white ${
                  isActive ? "text-blue-800 underline" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-1 m-1 h-10 cursor-pointer w-auto  border-gray-800 text-white ${
                  isActive ? "text-blue-800 underline" : "text-white"
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `p-1 m-1 h-10 cursor-pointer w-auto  border-gray-800 text-white ${
                  isActive ? "text-blue-800 underline" : "text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                `p-1 m-1 h-10 cursor-pointer w-auto  border-gray-800 text-white ${
                  isActive ? "text-blue-800 underline" : " text-gray-500"
                }`
              }
            >
              Grocery
            </NavLink>
          </li>
          {/* <li className={liStyle}><Link to={'/about'}>About</Link></li>
                    <li className={liStyle}><Link to="/contact">Contact</Link></li>
                    <li className={liStyle}><Link to="/grocery">Grocery</Link></li> */}
          <li className=" font-bold cursor-pointer text-green-500 ">
            <Link to="/Cart">
              cart
              <span className=""> ({cartItems.length})</span>
            </Link>
          </li>
          {/* <li className={liStyle} >Sign</li> */}
          <div className=" mr-2">
            <button
              className="text-center w-24 px-3 text-white ml-4 rounded"
              onClick={() => {
                  loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
                }}
            >
              {loginBtn}
            </button>
          </div>
        </ul>
          <div className=" flex flex-col items-center text-center">
                 <div className=" cursor-pointer h-6 w-6 rounded-full bg-white"></div>
                <li className="list-none text-[12px] font-bold text-orange-600">{loggedInUser}</li>
          </div>
      </div>
    </div>
  );
};
export default Header;
