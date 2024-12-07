import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="w-full xs:px-6 md:px-24 xs:pt-12 md:py-20">
        <div className="flex gap-3">
          <Link href="/" className="active:text-gray-400 hover:text-gray-400">
            Home{" "}
          </Link>
          <p>/</p>
          <Link href="./cart" className="active:text-gray-400 hover:text-gray-400">
            {" "}
            Cart
          </Link>
        </div>
        <div className="h-[850px] w-full flex flex-col gap-6 font-[Poppins] mt-7">
          <div className="h-[72px] w-full border-2 border-gray-300 rounded-md text-[18px] font-normal flex justify-between items-center px-4 ">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="h-[102px] w-full border-2 border-gray-300 rounded-md  flex items-center justify-between md:px-4  xs:text-[10px] md:text-[16px] ">
            <div className="flex items-center gap-2">
              <img src="./smallscreen.png" alt="" />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
            <input
              type="number"
              className="w-[72px] h-[44px] rounded-md px-1 border-[1px] border-black"
            />
            <p>$650</p>
          </div>
          <div className="h-[102px] w-full border-2 border-gray-300  rounded-md flex items-center justify-between md:px-4  xs:text-[10px] md:text-[16px] ">
            <div className="flex items-center gap-2">
              <img src="./smallremote.png" alt="" />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
            <input
              type="number"
              className="w-[72px] h-[44px] rounded-md px-1 border-[1px] border-black"
            />
            <p>$650</p>
          </div>
          <div className="h-[56px] w-full  flex  xs:justify-around md:justify-between">
            <button className="md:w-[218px] xs:w-[140]px] xs:h-[40px] md:h-[56px] border-2  rounded-md border-black hover:bg-black hover:text-white">
              Return To Shop
            </button>
            <button className="xs:w-[140px] xs:h-[40px] md:w-[218px] md:h-[56px] border-2  rounded-md border-black hover:bg-black hover:text-white">
              Update Cart
            </button>
          </div>
          <div className="w-full h-[324px] mt-10 flex justify-between xs:flex-col md:flex-row gap-3 ">
            <div className=" xs:w-[300px] md:w-[527px] h-[57px] flex justify-between">
              <input
                type="text"
                className="w-[150px] h-[57px] border-2 border-black rounded-md"
              />
              <button className="xs:w-[140px] md:w-[218px] xs:h-[40px] md:h-[56px] bg-red-500   rounded-md hover:bg-black text-white">
                Apply Coupon
              </button>
            </div>
            <div className=" xs:w-[350px] md:w-[470px] h-[324px] border-2  border-gray-500 flex flex-col px-7 space-y-4 py-5">
              <p className="text-[20px] font-normal">Cart Total</p>
              <div className="flex justify-between">
                <p>SubTotal:</p>
                <p>$1750</p>
              </div>
              <hr />
              <div className="flex justify-between">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Total:</p>
            <p>$1750</p>
          </div>
          <div className=" text-center"><button className="w-[218px] h-[56px] bg-red-500   rounded-md hover:bg-black text-white">
                Apply Coupon
              </button></div>
            </div>
           
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
