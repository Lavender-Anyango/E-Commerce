
import './index.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
function Navbar() {

	return (
        <div className='navbar'>

        
            
            
         <nav >

            <p className='logo'>Supro.</p>
        {/* <a className='logo' href="/#">supro</a>  */}
        <a href="/#">Home</a>
        <a href="/#">Shop</a>
        <a href="/#">Collection</a>
        <a href="/#">Pages</a>
        <a href="/#">Blog</a>
        <a href="/#">Contact</a>
        
    </nav>
    <div className='icons'>
   <a> <CiSearch  size={23}/></a>
   <a> <IoPersonOutline size={23}/></a>
   <a> <CiShoppingCart size={23}/></a>
   <a> <CiHeart size={23}/></a>
   <a> <FaBars size={23}/></a>
        
    </div>
    </div>
   
	);
}

export default Navbar;