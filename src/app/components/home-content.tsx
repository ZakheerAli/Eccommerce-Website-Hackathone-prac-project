export default function HomeContent() {
  return (
    <div>
      <div className="w-full md:px-[100px] md:py-9 flex md:gap-12 font-[Poppins]">
        
        <div className="xs:hidden md:block w-[217px] h-[344px]  bg-white text-[16px] font-[Poppins] leading-6 space-y-4 border-r-2">
          <p>Woman's Fashion <i className="ri-arrow-right-s-line ml-12"></i></p>
          <p>Men's Fashion <i className="ri-arrow-right-s-line ml-20 "></i></p>
          <p>Electronics</p>
          <p>Home & Life</p>
          <p>Medicine</p>
          <p>Sports & Outdoor</p>
          <p>Baby's & Toys</p>
          <p>Groceries & Pets</p>
          <p>Health & beauty</p>
        </div>
        <div className="md:w-[860px]  xs:[900px] md:h-[344px] bg-black flex xs:flex-col md:flex-row">

          <div className="xs:w-full md:w-[50%] xs:[450px] md:h-full flex flex-col pl-10 justify-center md:xs:gap-8 gap-6 text-white xs:py-6">
            <div className="w-[190px] h-[49px] bg-black flex items-center justify-between">
              <img src="./apple-logo.png" alt="Apple Logo" />
              <p>iphone 14 series</p>
            </div>
            <div className="w-[294px] h-[120px] bg-black font-[Poppins]">
              <h2 className="text-[48px]  font-[Inter] font-bold leading-[55px]">
                Up to 10% off Voucher
              </h2>
            </div>
            <div className="w-[113px] h-[28px] bg-black ml-3 ">
              <button className="hover:underline">
                Shop Now <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
          <div className=" xs:w-full md:w-[50%] xs:[450px] h-full pt-6 flex flex-col">
            <img src="./iphone.png" alt="" />
            <div className="xs:hidden md:flex gap-3 absolute bottom-40 left-[53%]">
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full  bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <div className="w-3 h-3 rounded-full  bg-gray-600"></div>
              <div className="w-3 h-3 rounded-full   bg-gray-600"></div>
            </div>
          </div>
         
        </div>
        
      </div>
    </div>
  );
}
