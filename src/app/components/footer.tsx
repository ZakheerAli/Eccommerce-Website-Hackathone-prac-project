import "remixicon/fonts/remixicon.css";
export default function Footer() {
  return (
    <div>
      <div className="w-full xs:h-[1100px] md:h-[440px] bg-black text-[#ffffff] px-16 pt-10 flex flex-col justify-between xs:mt-[400px] md:mt-0">
        <div className="w-full md:h-[240px]  flex md:gap-[20px] font-[Poppins] xs:flex-col md:flex-row">
            
                  <div className="md:w-[20%] px-4 flex flex-col gap-4 py-3">
            <div>
              <h5 className="font-[inter] text-[24px] font-medium">EXCUSIVE</h5>
              <p className=" font-[Poppins] text-[20px] font-light">
                Subscribe
              </p>
              <p className="text-[14px] font-normal">
                Get 10% off your first order
              </p>
            </div>
            <div className="bg-black h-[40px] flex items-center justify-between border-white border-2 px-2 rounded-md">
              <input type="text" className="w-[70%] bg-black" />
              <i className="ri-send-plane-2-line "></i>
            </div>
          </div>
          <div className="md:w-[20%]   py-3 px-4">
            <div className="space-y-3">
              <h3 className=" font-[Poppins] text-[20px] font-light">
                Support
              </h3>
              <p className="text-[14px] font-normal">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="text-[14px] font-normal">exclusive@gmail.com</p>
              <p className="text-[14px] font-normal">+88015-88888-9999</p>
            </div>
          </div>
            
        
          <div className="md:w-[20%] py-3 px-4">
            <div className="space-y-3">
              <h3 className=" font-[Poppins] text-[20px] font-light">
                Account
              </h3>
              <p className="text-[14px] font-normal">My Account.</p>
              <p className="text-[14px] font-normal">Login / Register</p>
              <p className="text-[14px] font-normal">Cart</p>
              <p className="text-[14px] font-normal">Wishlist</p>
              <p className="text-[14px] font-normal">Shop</p>
            </div>
          </div>
          <div className="md:w-[15%]   py-3 px-4">
            <div className="space-y-3">
              <h3 className=" font-[Poppins] text-[20px] font-light">
                Quick Link
              </h3>
              <p className="text-[14px] font-normal">Privacy Policy</p>
              <p className="text-[14px] font-normal">Terms Of Use</p>
              <p className="text-[14px] font-normal">FAQ</p>
              <p className="text-[14px] font-normal">Contact</p>
            </div>
          </div>
          <div className="md:w-[25%]  py-3 px-4 space-y-3">
          <h3 className=" font-[Poppins] text-[20px] font-light">
                Download App
              </h3>
              <p className="text-[14px] font-normal"> Save $3 with App New User Only</p>
              <div className="w-[198px] h-[84px] flex">
                <div className="w-[50%] ">
                    <img src="./qrcode.png" alt="" />
                </div>
                <div className="w-[50%]">
                    <div className="h-[50%]">
                        <img src="./playstore.png" alt="" />
                    </div>
                    <div className="h-[50%]">
                        <img src="./appstore.png" alt="" />
                    </div>
                </div>

              </div>
              <div className="w-[168px] h-[26px] space-x-5 text-2xl font-bold ">
              <i className="ri-facebook-line"></i>
              <i className="ri-twitter-line"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-linkedin-line"></i>
              </div>
          </div>
        </div>
        <div className="text-center">
            <hr />
            <p className="text-[14px] font-[Poppins] font-normal text-[#ffffff]"> &#169;Copyright Rimel 2022. All right reserved.Made by ZAKHEER ALI</p>
        </div>
      </div>
    </div>
  );
}
