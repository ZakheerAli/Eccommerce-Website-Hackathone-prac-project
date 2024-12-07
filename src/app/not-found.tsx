import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Link from "next/link";
export default function NotFound() {
  return (
    <div>
        <Navbar/>
        <div className=" xs:px-6 md:px-20  xs:pt-10 md:py-12">
        <div className="flex gap-3">
          <Link href="/" className="active:text-gray-400 hover:text-gray-400">
            Home
          </Link>
          <p>/</p>
          <Link href="./not-found.tsx" className="active:text-gray-400 hover:text-gray-400">
           404 Error
          </Link>
        </div>
        <div className=" xs:h-[400px] xs:flex xs:items-center gap-6 xs:justify-center xs:flex-col md:h-900px w-full text-center md:py-8 xs:mt-20 md:mt-0 xs:space-y-7">
        <h1 className=" xs:text-4xl md:text-[110px] font-[Inter] font-medium">404 NOT FOUND</h1>
        <p className="font-[Poppins]  xs:text-[12px] md:text-[16px] font-normal md:mb-9 xs:mb-20">Your visited page not found. You may go home page.</p>
        <Link href="/" className="active:text-gray-400 hover:text-gray-400 mt-10">
            <button className=" font-[Poppins] w-[158px] h-[50px] rounded-md bg-red-600 text-white hover:bg-black">Back To Home</button>
          </Link>
        </div>
        </div>
        <Footer/>
    </div>
  );
}
