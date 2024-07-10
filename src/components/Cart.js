import { useSelector, useDispatch } from "react-redux";
import CategoryItemiList from "./CategoryItemList";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart =()=>{
 //  subscribing to the store using a selector
 const cartItem=useSelector((store)=>store?.cart?.items)
const dispatch=useDispatch()
 const handleRemoveItems=()=>{
    dispatch(removeItem())
}
 const handleRemoveItems1=()=>{
    dispatch(clearCart())
}
return(
    <>
    <div className="text-center min-h-[77vh] bg-gray-300">
        <h1 className="text-2xl font-sans font-bold">Our Cart ({cartItem.length})</h1>
        <button onClick={handleRemoveItems} className=" px-4 bg-orange-600 rounded-lg py-2 mt-4 text-green-300 text-lg hover:bg-green-400 hover:text-orange-600">Remove currently added items</button>
        <button onClick={handleRemoveItems1} className=" px-4 ml-4 bg-green-400 rounded-lg py-2 mt-4 text-orange-600 text-lg hover:bg-orange-600 hover:text-green-400">clear all items</button>
        <div className="w-6/12 m-auto">
          {cartItem.length===0 && <h2 className="text-pink-500 mt-8 text-xl">Cart is Empty. Add items in the cart !!!</h2>}
        <CategoryItemiList items={cartItem}/>
        </div>
    </div>
    </>
)
}
export default  Cart;