import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
import { CallTracker } from "assert"
export default function SignUp(){

    return(
        <div>
            <Navbar/>
            <div className=" xs:px-7 md:px-20 xs:py-7  md:py-10">
                <div className="h-[781px] w-full flex xs:flex-col md:flex-row xs:space-y-5">
                    <div className="md:w-[60%] h-full">
                        <img src="./Side Image.png" alt="" />
                    </div>
                    <div className="md:w-[40%] h-full flex items-center justify-end">
                        <div className="w-[371px] h-[530px] xs:mt-16 md:mt-0">
                            <div>
                                <h1 className="text-[36px] font-[Inter] font-medium">Log in to Exclusive</h1>
                                <p className="font-[Poppins] text-base font-normal mt-2">Enter Your Details Below</p>
                            </div>
                        <div className="md:w-[371px] h-[404px] space-y-10  xs:mt-10">
                       
                        <input type="Email"  placeholder="Email or Phone Number"  className="h-[32px] border-b-2 border-slate-500 w-full"/>
                        <input type="password"  placeholder="Password"  className="h-[32px] border-b-2 border-slate-500 w-full"/>
                        <div className="flex justify-between items-center">
                        <button className=" hover:bg-black cursor-pointer w-[143px] h-[56px] bg-red-500 text-white font-[Poppins] text-base rounded-md">Login</button>
                            <p className="text-red-500 cursor-pointer hover:font-bold">Forget Password?</p>
                        </div>
                      
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}