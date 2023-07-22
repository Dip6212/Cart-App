import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart}=useSelector((state)=>state);
  return ( 
    <div>
      <div className="flex max-xs:flex-col justify-between xs:py-2 max-xs:gap-2  items-center h-20 w-max-5xl w-[80%] mx-auto">
        <NavLink to="/">
          <div className="ml-5 xs:py-2">
          <img src="../logo.png" className="h-14"/>
          </div>
          </NavLink>
          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
            </NavLink>
            <NavLink to="/cart">
            <div className="relative">
                {cart.length>0 &&
                  <span className="absolute top-[-7px] left-[10px] py-1 px-2 rounded-full text-[8px] animate-bounce bg-green-600">{cart.length}</span>
                }
                <FaShoppingCart className="text-2xl"/>
            </div>
            </NavLink>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
