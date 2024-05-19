import { useSelector } from "react-redux";
import CategoryItemiList from "./CategoryItemList";
const Cart =()=>{
 //  subscribing to the store using a selector
 const cartItem=useSelector((store)=>store?.cart?.items)
return(
    <>
    <div className="text-center min-h-[77vh] bg-gray-300">
        <h1 className="text-2xl font-sans font-bold">Our Cart</h1>
        <div>
        <CategoryItemiList items={cartItem}/>
        </div>
    </div>
    </>
)
}
export default  Cart;