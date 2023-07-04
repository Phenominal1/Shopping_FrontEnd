import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";


const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(()=>{
        setTotalAmount( cart.reduce ((acc, curr) => acc+curr.price, 0  ));
  },[cart])

  return (
  <div >
      {
        cart.length > 0 ? 
        (<div className="flex itmes-center justify-between max-w-6xl mx-auto gap-14">

            <div>
              {
                cart.map((item, index)=>{
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>

              <div className="flex flex-col justify-between mt-10">
                <div>
                  <div className="text-green-700 font-semibold text-xl">Your Cart</div>
                  <div className="text-green-700 text-5xl font-semibold uppercase">Summary</div>
                  <p className="text-gar-600 font-semibold mt-7 text-lg">
                    <span >Total Items: {cart.length}</span>
                  </p>
                </div>
              
              
                <div>
                  <p className="text-gray-600 font-semibold justify-between text-lg">Total Amount: ${totalAmount}</p>
                </div>
                <button className="bg-green-700 text-white rounded-full h-9 hover:bg-white hover:text-green-700 hover:border-2 hover:border-green-600 mb-4">Checkout Now</button>
                
              </div>

        </div>):
        (<div className="flex flex-col justify-center items-center mx-auto">
          <h1 className="font-semibold font-[20px]">Cart is Empty</h1>
          <Link to={'/'}>
          <button className="text-white font-sm w-[8vw] bg-green-600 border border-green-600 rounded-full font-semibold " >Shop Now</button>
          </Link>
         
          </div>)
      }
  </div>
  );
};

export default Cart;
