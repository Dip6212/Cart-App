import { toast } from "react-hot-toast";
import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/cartSlice";

const CartItem = ({ item, itemIndex }) => {

  const dispatch=useDispatch();

    const removeFromCart=()=>{
      dispatch(remove(item.id));
      toast.success("Item Removed Form Cart")
    }


  return (
    <div className="flex  gap-5 border-b-2 py-5 ">
      <div className="h-[200px] w-[20%]  ">
        <img src={item.image} className="h-full w-full" />
      </div>
      <div className="flex flex-wrap flex-col justify-between w-[80%] ">
        <div>
        <p className="py-2 text-gray-700 font-semibold text-lg text-left mt-1">{item.title}</p>
        <p className="pr-[20px]  text-gray-400 font-normal text-[14px] text-left">{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
        </div>
        <div className="flex w-[80%] mx-auto justify-between pt-8">
          <div>

            <p className="text-green-600 font-semibold">${item.price}</p>
          </div>
          <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-red-600/60  cursor-pointer" onClick={removeFromCart}>
            <AiFillDelete/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
