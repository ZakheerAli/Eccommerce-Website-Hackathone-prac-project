import 'remixicon/fonts/remixicon.css'
import Navbar from './components/navbar'
import HomeContent from './components/home-content'
import Products from './components/products'
// import Footer from './components/footer'
export default function Home(){
  return(
    <div>
      
      <Navbar/>
      <HomeContent/>
      <Products/>
    
    </div>
  )
}