import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
export default function Contact(){
    return(
        <div>
            <Navbar/>
            <div className="xs:px-4 md:px-20 xs:pt-9 md:py-10">
            <div className="flex gap-3">
          <Link href="/" className="active:text-gray-400 hover:text-gray-400">
            Home
          </Link>
          <p>/</p>
          <Link
            href="./contact"
            className="active:text-gray-400 hover:text-gray-400"
          >
            Contact
          </Link>
        </div>
        <div className="w-full flex justify-evenly mt-8 xs:flex-col md:flex-row">
            <div className="md:w-[340px] h-[458px]  md:px-7 py-7 md:space-y-10">
                <div className="h-[122px] w-[280px]  flex flex-col px-2 space-y-3">
                    <p className="flex items-center text-base font-medium gap-5"><img src="./icons-phone.png" alt="" />Call To Us</p>
                    <p className="text-sm font-normal font-[poppins]">We are available 24/7, 7 days a week.</p>
                    <p className="text-sm font-normal font-[poppins]">Phone: +8801611112222</p>
                </div>
                <hr />
                <div className="h-[180px]  w-[262px]  flex flex-col px-2 py-3 space-y-3">
                
                    <p className="flex items-center text-base font-medium gap-5"><img src="./icons-mail.png" alt="" />Write To Us</p>
                    <p className="text-sm font-normal font-[poppins]">Fill out our form and we will contact you within 24 hours.</p>
                    <p className="text-sm font-normal font-[poppins]"> Emails: customer@exclusive.com</p>
                    <p className="text-sm font-normal font-[poppins]"> Emails: support@exclusive.com</p>
                
                </div>
            </div>
            <div className="md:w-[700px] xs:h-[700px] md:h-[458px] px-5 py-4 space-y-7">
                <div className=" xs:h-[300px] md:h-[55px] w-full flex justify-between xs:flex-col md:flex-row">
                    <input type="text" placeholder="Your Name"className="xs:h-[90px] md:h-full md:w-[30%] bg-gray-200 rounded-md px-3"/>
                    <input type="text" placeholder="Your Email" className="xs:h-[90px] md:h-full md:w-[30%] bg-gray-200 rounded-md px-3"/>
                    <input type="text" placeholder="Your Phone"className="xs:h-[90px] md:h-full md:w-[30%]b bg-gray-200 rounded-md px-3"/>
                </div>
                <div><input type="text"  placeholder="Your Message"className="h-[207px] w-full bg-gray-200 rounded-md px-3 py-6"/></div>
                <div className="text-right"><button className="xs:w-[140px] md:w-[218px] xs:h-[40px] md:h-[56px] bg-red-500   rounded-md hover:bg-black text-white">
                Send Message
              </button></div>
            </div>
        </div>
            </div>
            <Footer/>
        </div>
    )
}