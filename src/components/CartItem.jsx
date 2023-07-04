
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import {remove} from '../redux/Slices/CartSlice'
import { toast } from "react-hot-toast";


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();
  const removeFromCart = () =>{
      dispatch(remove(item.id));
      toast.error('Removed from cart')
     
  }
  return (
    <div className="w-full">

      <div className="flex justify-between mt-10  gap-12 border-b-2 border-b-gray-600 mb-4">

        <div className="h-[180px] mb-4">
          <img className="h-full w-full " src={item.image} />
        </div>

        <div className="max-w-[20vw] h-[180px]">

          <h1 className="text-gray-700 font-semibold text-2xl truncate  mt-1">{item.title}</h1>
          <h1 className="w-full mt-4 text-gray-600 font-semibold text-[15px] ">{item.description.split(" ").slice(0,8).join(" ")}</h1>

          <div className="flex justify-between mt-11">
            <p className="text-green-700 font-semibold text-xl">${item.price}</p>
            <div className="text-4xl" onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
};

export default CartItem;
