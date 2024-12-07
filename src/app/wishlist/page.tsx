import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Wishlist() {
  return (
    <div>
      <Navbar />
      <div className="w-full  xs:h-[1800px] md:h-[1000px] md:px-20 md:py-10 md:mb-32 ">
        <div className="w-full h-[986px]  font-[Poppins]">
          <div className="w-full h-[58px] flex items-center justify-between xs:gap-6 xs:px-6 xs:mt-9">
            <p className="text-[20px] font-normal">Wishlist(4)</p>
            <button className="md:w-[223px] xs:w-[110px] xs:h-[30px] md:h-[56px] border-[1px] border-gray-950 xs:text-xs md:text-lg">
              Move All To Bag
            </button>
          </div>
          <div className="w-full  md:h-[360px] flex justify justify-between  xs:gap-1 xs:mt-16 xs:flex-col md:flex-row xs:space-y-20 md:space-y-2">
            <div className="md:w-[270px] h-[322px] flex flex-col gap-3 xs:px-10 md:px-2 ">
              <img src="./wish1.png" alt="" />
              <h3>Gucci duffle bag</h3>
              <div className="flex">
                <p className="text-red-500">
                  $960 <span className="line-through text-gray-700">$1160</span>
                </p>
              </div>
            </div>
            <div className="md:w-[270px] h-[322px] flex flex-col gap-3 xs:px-10 md:px-2">
              <img src="./wish2.png" alt="" />
              <h3>RGB liquid CPU Cooler</h3>
              <div className=" flex">
                <p className="text-red-500">$1960</p>
              </div>
            </div>
            <div className="xs:w-full md:w-[270px] h-[322px] flex flex-col gap-3 md:px-2 xs:px-10">
              <img src="./wish3.png" alt="" />
              <h3>GP11 Shooter USB Gamepad</h3>
              <div className=" flex">
                <p className="text-red-500">$550</p>
              </div>
            </div>
            <div className="md:w-[270px] h-[322px]  flex-col gap-3 md:px-2 xs:px-12">
              <img src="./wish4.png" alt="" />
              <h3>Quilted Satin Jacket </h3>
              <div className=" flex">
                <p className="text-red-500">$750</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[58px] flex items-center justify-between xs:px-6">
            <p className="text-[20px] font-normal flex items-center gap-3">
              <img src="./red.png" alt="" />
              Just For You
            </p>
            <button className=" md:w-[223px] xs:w-[110px] xs:h-[30px] md:h-[56px] border-[1px] border-gray-950">
              See All
            </button>
          </div>
          <div className="w-full xs:h-[220px] md:h-[360px] flex justify justify-between xs:px-2 xs:gap-1 xs:mt-16">
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2">
              <img src="./wish5.png" alt="" />
              <h3>ASUS FHD Gaming Laptop</h3>
              <div className="flex flex-col">
                <div>
                  {" "}
                  <p className="text-red-500">
                    $960 <span className="line-through">$1160</span>
                  </p>
                </div>
                <div className="flex">
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill "></i>
                  <p className="text-gray-600">(65)</p>
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:gap-3">
              <img src="./wish6.png" alt="" />
              <h3> IPS LCD Gaming Monitor</h3>
              <div className=" flex flex-col">
                <div>
                  <p className="text-red-500">$1160</p>
                </div>
                <div className="flex">
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill"></i>
                  <p className="text-gray-600">(35)</p>
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:hidden md:flex">
              <img src="./wish7.png" alt="" />
              <h3>HAVIT HV-G92 Gamepad</h3>
              <div className=" flex flex-col">
                <div>
                  <p className="text-red-500">$560</p>
                </div>
                <div className="flex">
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <p className="text-gray-600">(55)</p>
                </div>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:hidden md:flex">
              <img src="./wish8.png" alt="" />
              <h3>AK-900 Wired Keyboard</h3>
              <div className=" flex flex-col">
                <div>
                  <p className="text-red-500">$200</p>
                </div>
                <div className="flex">
                  {" "}
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill text-orange-600"></i>
                  <i className="ri-star-fill "></i>
                  <i className="ri-star-fill "></i>
                  <i className="ri-star-fill "></i>
                  <p className="text-gray-600">(55)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
}
