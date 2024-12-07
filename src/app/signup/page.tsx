import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Link from "next/link"
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
                        <div className="w-[371px] h-[530px] xs:mt-9 md:mt-0">
                            <div>
                                <h1 className="text-[36px] font-[Inter] font-medium">Create an account</h1>
                                <p className="font-[Poppins] text-base font-normal">Enter Your Details Below</p>
                            </div>
                        <div className="md:w-[371px] h-[404px] space-y-8 md:mt-7 xs:mt-10">
                        <input type="text" placeholder="Name" className="h-[32px] border-b-2 border-slate-500 w-full" />
                        <input type="Email"  placeholder="Email or Phone Number"  className="h-[32px] border-b-2 border-slate-500 w-full"/>
                        <input type="password"  placeholder="Password"  className="h-[32px] border-b-2 border-slate-500 w-full"/>
                        <button className=" hover:bg-black cursor-pointer w-full h-[56px] bg-red-500 text-white font-[Poppins] text-base">Create Account</button>
                        <button className=" hover:bg-black cursor-pointer hover:text-white flex items-center justify-center bg-white gap-3 w-full h-[56px] border-2 border-slate-500 text-black font-[Poppins] text-base"><img src="./Icon-Google.png" alt="" />Sign up with Google</button>
                        <p>Already have account? <Link href="/login" className="hover:font-bold underline">Log in</Link></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}