import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  console.log("printing first");
  console.log(cart);
  const [TotalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          (<div className="flex max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

            <div className="w-[70%]">
              {
                cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))
              }
            </div>
          <div className="flex flex-col ">
            <div>

              <div className="text-[35px] mb-5 text-green-600">Your Cart</div>
              <div className="text-[45px]  text-green-600 mb-8">Summary</div>
              <p>
                <span className="text-lg font-semibold py-3">Total Item: {cart.length}</span>
              </p>

            </div>

            <div>
              <p className="text-lg font-semibold py-3">Total Price: <span className=" text-green-600">${TotalAmount}</span></p>
              <button className="py-1 px-2  hover:bg-gray-700 hover:text-white text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[16px] w-full">Checkout Now</button>
            </div>

            </div>

          </div>

          ) : (
            <div className=" h-screen  w-screen flex flex-col justify-center items-center">
              <p className="text-[18px] py-5">cart is empty</p>
              <NavLink to="/">
                <button className="py-1 px-2  hover:bg-gray-700 hover:text-white text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[16px] w-full">Shop Now</button>
              </NavLink>
            </div>
          )

      }
    </div>
  );
};

export default Cart;
