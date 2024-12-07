import Footer from "./footer";

export default function Products() {
  return (
    <div>
      <div className="md:px-16 py-12 font-[Poppins] border-b-2">
        <div className=" xs:px-4 h-[103px] w-full  flex items-center justify-between">
          <div className=" xs:w-full md:w-[50%] h-full flex items-center justify-between">
            <div className=" xs:w-full md:w-[40%]">
              <div>
                <img src="/todays.png" alt="" />
              </div>
              <div className=" text-[36px] font-semibold">
                <h1>Flash Sales</h1>
              </div>
            </div>
            <div className="w-[60%] flex items-center justify-end">
              <div className="w-[302px] h-[70px]  items-center justify-evenly gap-2 xs:hidden md:flex">
                <div className="text-center ">
                  <p>Days</p>
                  <p className="text-[32px] font-bold font-[inter]">03 :</p>
                </div>

                <div className="text-center">
                  <p>Hours</p>
                  <p className="text-[32px] font-bold font-[inter]">23 :</p>
                </div>
                <div className="text-center">
                  <p>Minutes</p>
                  <p className="text-[32px] font-bold font-[inter]">19 :</p>
                </div>
                <div className="text-center">
                  <p>Seconds</p>
                  <p className="text-[32px] font-bold font-[inter]">56 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="W-[50%] h-full flex items-center xs:hidden md:block">
            <div className="flex gap-3 w-full ">
              <div className="w-10 h-10 rounded-full  bg-gray-400 flex items-center justify-center font-bold">
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center font-bold">
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:h-[350px] w-full flex gap-4 xs:px-4 pr-6 xs:py-5">
          <div>
            <img src="./remote.png" alt="" />
          </div>
          <div>
            <img src="./keyboard.png" alt="" />
          </div>
          <div className="xs:hidden md:block">
            <img src="./screen.png" alt="" />
          </div>
          <div className="xs:hidden md:block">
            <img src="./chair.png" alt="" />
          </div>
          <div className="xs:hidden md:block">
            <img src="./half-cha.png" alt="" />
          </div>
        </div>
        <div className="  xs:mt-10 md:mt-16 text-center xs:text-[12px] md:text-[16px] font-[Poppins] text-white">
          <button className="  hover:bg-black hover:text-white bg-red-600 xs:h-[40px] md:h-[56]  xs:w-[150px] md:w-[234px]">
            View All Products
          </button>
        </div>
      </div>
      <div className="md:h-[350px] w-full md:px-16 py-12 border-b-2 md:pb-10">
        <div className="h-[108px] w-full  flex xs:mb-10 ">
          <div className="xs:w-full md:w-[50%] h-full xs:px-3">
            <div>
              <img src="./categories.png" alt="" />
            </div>
            <div className="  xs:text-[33px] md:text-[36px] font-semibold font-[Poppins]">
              <h1>Browse By Category</h1>
            </div>
          </div>
          <div className="w-[50%] h-full items-center xs:hidden md:flex ">
            <div className="flex gap-3 w-full justify-end ">
              <div className="w-10 h-10 rounded-full  bg-gray-400 flex items-center justify-center font-bold">
                <i className="ri-arrow-right-line"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center font-bold">
                <i className="ri-arrow-right-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[150px] w-full xs:grid xs:grid-rows-2 xs:row-xs:grid-cols-2 px-3 md:flex xs:gap-7 md:gap-[30px] mt-6 justify-evenly">
          <img
            src="./category-phone.png"
            alt=""
            className="hover:bg-red-700 cursor-pointer hover:text-white "
          />
          <img
            src="./computer.png"
            alt=""
            className="hover:bg-red-700 cursor-pointer "
          />
          <img
            src="./smart watch.png"
            alt=""
            className="hover:bg-red-700 cursor-pointer "
          />
          <img
            src="./camera.png"
            alt=""
            className="hover:bg-red-700 cursor-pointer "
          />
          <img
            src="./headphones.png"
            alt=""
            className="hover:bg-red-700 cursor-pointer xs:hidden md:block "
          />
          <img
            src="./gaming.png"
            alt=""
            className="hover:bg-red-700 cursor-pointer xs:hidden md:block"
          />
        </div>
      </div>
      <div className=" xs:h-[800px] md:h-[518px] w-full  md:px-32 pl-14 py-20 xs:px-4">
        <div className="xs:h-[220px] md:h-[108:px] w-full  flex items-center justify-between">
          <div className="xs:w-full md:w-[50%] h-full xs:px-3">
            <div>
              <img src="./this month.png" alt="" />
            </div>
            <div className=" xs:text-[33px] md:text-[36px] font-semibold font-[Poppins]">
              <h1>Best Selling products</h1>
            </div>
          </div>
          <div>
            <button className="  hover:bg-black hover:text-white h-[56px] w-[159px] bg-red-600 xs:hidden md:block text-white">
              View All
            </button>
          </div>
        </div>
        <div className="w-full xs:h-[220px] md:h-[360px] flex justify justify-between xs:px-2 xs:gap-4">
          <img src="./jacket.png" alt="" />
          <img src="./gucci bag.png" alt="" />
          <img src="./speaker.png" alt="" className="xs:hidden md:block" />
          <img src="./book self.png" alt="" className="xs:hidden md:block" />
        </div>
        <div className="xs:text-center w-full mt-12 ml-20">
          <button className="  hover:bg-black hover:text-white h-[46px] w-[129px] text-[12px] bg-red-600 md:hidden xs:block text-white xs:text-center">
            View All
          </button>
        </div>
        <div className="w-full h-[400px] bg-yellow-400 xs:hidden md:block">
          <img src="./music.png" alt="" />
        </div>

        <div className="h-[1016px] w-full xs:pt-16 md:pt-32  ">
          <div className="h-[108px] w-full  flex">
            <div className="xs:w-full md:w-[50%] h-full xs:px-3">
              <div>
                <img src="./categories.png" alt="" />
              </div>
              <div className="  xs:text-[30px] md:text-[36px] font-semibold font-[Poppins]">
                <h1>Explore Our Products</h1>
              </div>
            </div>
            <div className="w-[50%] h-full items-center xs:hidden md:flex ">
              <div className="flex gap-3 w-full justify-end ">
                <div className="w-10 h-10 rounded-full  bg-gray-400 flex items-center justify-center font-bold">
                  <i className="ri-arrow-right-line"></i>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center font-bold">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xs:h-[220px] md:h-[360px] flex justify justify-between  xs:gap-1 xs:mt-16">
            <div className="md:w-[270px] h-[322px] flex flex-col gap-3 md:px-2 xs:px-3 ">
              <img src="./chocolate.png" alt="" />
              <h3>Breed Dry Dog Food</h3>
              <div className="flex">
                <p className="text-red-500">$100</p>
                <i className="ri-star-fill  text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <p className="text-gray-600">(35)</p>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2">
              <img src="./dslr.png" alt="" />
              <h3>CANON EOS DSLR Camera</h3>
              <div className=" flex">
                <p className="text-red-500">$360</p>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill "></i>
                <p className="text-gray-600">(95)</p>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:hidden md:flex">
              <img src="./laptop.png" alt="" />
              <h3> ASUS FHD Gaming Laptop</h3>
              <div className=" flex">
                <p className="text-red-500">$700</p>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill "></i>
                <p className="text-gray-600">(326)</p>
              </div>
            </div>
            <div className="w-[270px] h-[322px]  flex-col gap-3 px-2 xs:hidden md:flex">
              <img src="./products.png" alt="" />
              <h3>Curology Product Set </h3>
              <div className=" flex">
                <p className="text-red-500">$500</p>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <p className="text-gray-600">(145)</p>
              </div>
            </div>
          </div>
          <div className="w-full xs:h-[220px] md:h-[360px] flex justify justify-between xs:px-2 xs:gap-1 xs:mt-16">
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2">
              <img src="./toycar.png" alt="" />
              <h3>Kids Electric Car</h3>
              <div className="flex">
                <p className="text-red-500">$100</p>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill "></i>
                <p className="text-gray-600">(65)</p>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:gap-1">
              <img src="./shoes.png" alt="" />
              <h3>Jr. Zoom Soccer Cleats</h3>
              <div className=" flex">
                <p className="text-red-500">$360</p>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill"></i>
                <p className="text-gray-600">(35)</p>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:hidden md:flex">
              <img src="./consoler.png" alt="" />
              <h3> GP11 Shooter USB Gamepad</h3>
              <div className=" flex">
                <p className="text-red-500">$700</p>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill text-orange-600"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <p className="text-gray-600">(55)</p>
              </div>
            </div>
            <div className="w-[270px] h-[322px] flex flex-col gap-3 px-2 xs:hidden md:flex">
              <img src="./coat.png" alt="" />
              <h3>Quilted Satin Jacket</h3>
              <div className=" flex">
                <p className="text-red-500">$500</p>
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
          <div className="text-center ">
            <button className="  hover:bg-black hover:text-white md:w-[160px] md:h-[50px] md:text-base xs:w-[140px] h-[40px] ml-24 md:mt-6 xs:mt-12 bg-red-600 text-white text-xs">
              View All Product
            </button>
          </div>
        </div>
        <div className="w-full h-[786px]   xs:mt-0 md:mt-44">
          <div className="h-[108px] w-full  flex xs:flex-col md:flex-row">
            <div className="xs:w-full md:w-[100%] h-full xs:px-3">
              <div>
                <img src="./feature.png" alt="" />
              </div>
              <div className="  xs:text-[30px] md:text-[36px] font-semibold font-[Poppins]">
                <h1>New Arrivals</h1>
              </div>
            </div>
          </div>
          <div className="w-full xs:h-[800px] md:h-[600px] flex xs:gap-[20px] md:gap-[30px] xs:flex-col md:flex-row xs:px-2">
            <div className=" xs:w-full md:w-[50%] bg-black relative px-3 py-7 cursor cursor-pointer">
              <img src="./ps5.png" alt="" />
              <div className="w-[242px] h-[122px] absolute top-[70%] left-10 text-white space-y-2">
                <h3 className="text-[24px] font-bold font-[Inter]">
                  Play Station 5
                </h3>
                <p className="text-[14px] font-normal font-[Poppins]">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <button className="hover:underline font-[Poppins]">
                  Shop Now
                </button>
              </div>
              <div></div>
            </div>
            <div className="md:w-[50%] flex flex-col xs:gap-[20px] md:gap-[30px]">
              <div className="h-[50%] w-full bg-neutral-900 flex justify-end relative">
                <img src="./women.png" alt="" />
                <div className="w-[255px] h-[122px] absolute  xs:top-[40%] md:top-[50%] left-[5%] text-white space-y-2">
                  <h3 className="text-[24px] font-bold font-[Inter]">
                    Women’s Collections
                  </h3>
                  <p className="text-[14px] font-normal font-[Poppins]">
                    Featured woman collections that give you another vibe.
                  </p>
                  <button className="hover:underline font-[Poppins]">
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="h-[50%] w-full flex  xs:gap-[20px] md:gap-[30px]">
                <div className="w-[50%] h-full bg-zinc-800 px-5 pt-6 relative">
                  <img src="./roundspeaker.png" alt="" />
                  <div className="w-[242px] h-[122px] absolute  xs:top-[40%]  md:top-[60%] md:left-5 text-white space-y-2">
                    <h3 className=" xs:text-[20px] md:text-[24px] font-bold font-[Inter]">
                      Speakers
                    </h3>
                    <p className=" xs:text-[12px] md:text-[14px] font-normal font-[Poppins]">
                      Amazon Wireless Speaker.
                    </p>
                    <button className="hover:underline font-[Poppins]">
                      Shop Now
                    </button>
                  </div>
                </div>
                <div className="w-[50%] h-full  bg-zinc-800 relative px-5 pt-6 ">
                  <img src="./perfume.png" alt="" />
                  <div className="w-[242px] h-[122px] absolute xs:top-[40%] md:top-[60%] left-5 text-white space-y-2">
                    <h3 className="xs:text-[20px] md:text-[24px] font-bold font-[Inter]">
                      Perfume
                    </h3>
                    <p className=" xs:text-[12px] md:text-[14px] font-normal font-[Poppins]">
                      GUCCCI INTENCE OUD EDP.
                    </p>
                    <button className="hover:underline font-[Poppins]">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] flex md:gap-[40px] justify-between xs:mt-48 md:mt-0 xs:flex-col md:flex-row">
          <div className="md:w-[30%] xs:w-full flex items-center justify-center flex-col  xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
                <img src="./icon-delivery.png" alt="" />
              </div>
            </div>
            <div className="w-[90%] h-[65px]">
              <h3 className="text-[20px] font-semibold font-[Poppins]">
                FREE AND FAST DELIVERY
              </h3>
              <p className="text-[14px] font-normal font-[Poppins]">
                Free delivery for all orders over $140
              </p>
            </div>
            <div></div>
          </div>
          <div className="md:w-[30%]  flex items-center  flex-col xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
                <img src="./headphone.png" alt="" />
              </div>
            </div>
            <div className="w-[90%] h-[65px]">
              <h3 className="text-[20px] font-semibold font-[Poppins]">
                {" "}
                24/7 CUSTOMER SERVICE
              </h3>
              <p className="text-[14px] font-normal font-[Poppins]">
                Friendly 24/7 customer support
              </p>
            </div>
          </div>
          <div className="md:w-[30%] flex items-center  flex-col xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
            <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
                <img src="./Icon-secure.png" alt="" />
              </div>
            </div>
            <div className="w-[90%] h-[65px]">
              <h3 className="text-[20px] font-semibold font-[Poppins]">
                MONEY BACK GUARANTEE
              </h3>
              <p className="text-[14px] font-normal font-[Poppins]">
                We reurn money within 30 days
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
