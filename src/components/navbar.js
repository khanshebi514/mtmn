import Link from "next/link";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { handleMenu } from "@/store/menuSlice";

export default function Navbar() {

    const dispatch = useDispatch();
    const menuState = useSelector((state)=>state.menuState.clicked)

    const hanldeMenuDispatch =(action) =>{
        dispatch(handleMenu(action))
    }
  return (
    <header className="mt-[64px] w-full min-h-[25px] flex justify-between items-center flex-wrap mb-2">
        <div className="logo">
            <h1 className="uppercase">mtmn</h1>
        </div>
        <div className="nav-item">
            <ul className="md:flex justify-center items-center gap-3 hidden">
                <Link className="hover:border-b border-white" href='/'>Home</Link>
                <Link className="hover:border-b border-white" href='/shop'>Shop</Link>
                <Link className="hover:border-b border-white" href='/contact'>About</Link>
                <Link className="hover:border-b border-white" href='/about'>Contact</Link>
            </ul>

            {/* menu icon state */}
            {menuState ? <RxCross2 className="md:hidden cursor-pointer hover:text-yellow-500" size='30px'onClick={()=>{hanldeMenuDispatch(false)}} /> : <IoIosMenu className="md:hidden cursor-pointer hover:text-yellow-500" size='30px' onClick={()=>{hanldeMenuDispatch(true)}}/>}
            
            

            
        </div>
        <div className="account flex justify-center items-center gap-3">
            <span className="flex justify-center items-center gap-2 cursor-pointer hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
             </svg>
             account
            </span>
            <div className="relative">
            <span className="cursor-pointer hover:text-yellow-500"><TiShoppingCart size='30px'/></span>
            <span className="absolute top-0 left-5 bg-yellow-500 rounded-full px-1 text-black text-sm flex items-center">0</span>
            </div>
            
        </div>
    </header>
  )
}
