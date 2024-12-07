import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="w-full xs:px-5 md:px-20 py-10">
        <div className="flex gap-3">
          <Link href="/" className="active:text-gray-400 hover:text-gray-400">
            Home
          </Link>
          <p>/</p>
          <Link
            href="./about"
            className="active:text-gray-400 hover:text-gray-400"
          >
            About
          </Link>
        </div>
        <div className="h-[609px] w-full flex items-center gap-4 md:flex-row xs:flex-col ">
            <div className="md:w-[525px]  xs:h-[450px] md:h-[336px] space-y-5">
                <h1 className="text-[54px] font-[Inter] font-semibold">Our Story</h1>
                <p className="text-[16px] font-[Poppins] font-normal">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                <p className="text-[16px] font-[Poppins] font-normal">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            </div>
            <div className="md:w-[600px] h-[609px]">
                <img src="./girls.png" alt="" />
            </div>
            
        </div>
        <div className=" xs:mt-40 xs:h-[1000px] md:h-[250px] w-full flex justify-between items-center xs:flex-col md:flex-row xs:space-y-6">
        <div className="md:w-[20%] cursor-pointer hover:bg-red-500 border-2 border-gray-500  flex items-center justify-center flex-col  xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
        <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
          <img src="./moneyicon.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] h-[65px]">
          <h3 className="text-[20px] font-semibold font-[Poppins]">10.5K</h3>
          <p className="text-[14px] font-normal font-[Poppins]"> Sallers active our site</p>
        </div>
        <div></div>
       </div>
       <div className="md:w-[20%] cursor-pointer hover:bg-red-500 border-2 border-gray-500 flex items-center  flex-col xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
       <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
          <img src="./dollaricon.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] h-[65px]">
          <h3 className="text-[20px] font-semibold font-[Poppins]"> 33K</h3>
          <p className="text-[14px] font-normal font-[Poppins]"> Monthly Produduct Sale</p>
        </div>
       </div>
       <div className="md:w-[20%]   cursor-pointer hover:bg-red-500 border-2 border-gray-500 flex items-center  flex-col xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
       <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
          <img src="./shoppingicon.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] h-[65px]">
          <h3 className="text-[20px] font-semibold font-[Poppins]">45.5K</h3>
          <p className="text-[14px] font-normal font-[Poppins]">Customer active in our site</p>
        </div>
       </div>
       <div className="md:w-[20%]  cursor-pointer  hover:bg-red-500 border-2 border-gray-500 flex items-center  flex-col xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
       <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
          <img src="./moneyicon.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] h-[65px]">
          <h3 className="text-[20px] font-semibold font-[Poppins]"> 25k</h3>
          <p className="text-[14px] font-normal font-[Poppins]">Anual gross sale in our site</p>
        </div>
       </div>
        </div>
        <div className=" xs:h-[1500px] md:h-[564px] w-full flex justify-between mt-20 xs:flex-col md:flex-row xs:space-y-3">
            <div className="md:w-[30%]  px-3 space-y-2">
                <img src="./person1.png" alt="" />
                <h2 className="text-[32px] font-medium">Tom Cruise</h2>
                <p className="text-[16px] font-normal">Founder & Chairmen</p>
                <div className="flex gap-3 text-2xl">
                <i className="ri-twitter-line"></i>
                <i className="ri-linkedin-line"></i>
                <i className="ri-instagram-line"></i>
                </div>
            </div>
            <div className="md:w-[30%] px-3 space-y-2">
                <img src="./person2.png" alt="" />
                <h2 className="text-[32px] font-medium">Emma Watson</h2>
                <p className="text-[16px] font-normal">Managing Director</p>
                <div className="flex gap-3 text-2xl">
                <i className="ri-twitter-line"></i>
                <i className="ri-linkedin-line"></i>
                <i className="ri-instagram-line"></i>
                </div>
            </div>
            <div className="md:w-[30%]  px-3 space-y-2">
                <img src="./person3.png" alt="" />
                <h2 className="text-[32px] font-medium">Will Smith</h2>
                <p className="text-[16px] font-normal">Product Designer</p>
                <div className="flex gap-3 text-2xl">
                <i className="ri-twitter-line"></i>
                <i className="ri-linkedin-line"></i>
                <i className="ri-instagram-line"></i>
                </div>
            </div>
        </div>
        <div className="w-full h-[200px] flex md:gap-[40px] justify-between xs:mt-48 md:mt-20 xs:flex-col md:flex-row">
       <div className="md:w-[30%] xs:w-full flex items-center justify-center flex-col  xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
        <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
          <img src="./icon-delivery.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] h-[65px]">
          <h3 className="text-[20px] font-semibold font-[Poppins]">FREE AND FAST DELIVERY</h3>
          <p className="text-[14px] font-normal font-[Poppins]">Free delivery for all orders over $140</p>
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
          <h3 className="text-[20px] font-semibold font-[Poppins]"> 24/7 CUSTOMER SERVICE</h3>
          <p className="text-[14px] font-normal font-[Poppins]">Friendly 24/7 customer support</p>
        </div>
       </div>
       <div className="md:w-[30%] flex items-center  flex-col xs:px-10 md:px-4 py-4 gap-3 xs:text-center">
       <div className="w-[80px] h-[80px] rounded-full bg-gray-600 flex items-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full bg-black flex items-center justify-center">
          <img src="./Icon-secure.png" alt="" />
          </div>
        </div>
        <div className="w-[90%] h-[65px]">
          <h3 className="text-[20px] font-semibold font-[Poppins]">MONEY BACK GUARANTEE</h3>
          <p className="text-[14px] font-normal font-[Poppins]">We reurn money within 30 days</p>
        </div>
       </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
