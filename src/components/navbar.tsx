import {motion} from 'framer-motion';
import {  useNavigate } from "react-router-dom"
import {FC, useEffect, useState} from "react"
import { CgProfile } from "react-icons/cg";


 const Navbar:FC=function(){
  const [username,setUsername]=useState<string>('')
  const navigate=useNavigate()
  const [showdropdown,setShowdropdown]=useState<boolean>(false)

   useEffect(()=>{
        const name:string | null=localStorage.getItem('email')
        if(name){
          const index=name.indexOf('@')
          setUsername(name.slice(0,index))
        }
   },[])
    return( 
        <nav className="w-full h-28 max-sm:h-24 2xl:h-32 flex items-center  justify-between bg-gradient-to-r to-slate-800 from-[#b7126d] max-md:justify-between max-md:px-6" >
            <img src="olajpg.jpg" className="md:size-20 size-16 rounded md:ml-12 "></img>
         
          <ul className="md:flex  w-auto gap-8 font-semibold text-white  px-2 py-1   hidden text-2xl 2xl:text-3xl">
         
            <button className="hover:text-yellow-500 hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out cursor-pointer">{username}</button> 
            <button className="hover:text-yellow-500 md:mr-6 hover:-translate-y-1 hover:scale-105 duration-200 ease-in-out cursor-pointer" onClick={()=>{localStorage.clear();navigate('/')}}>Delete Account</button>
            <button  className="bg-blue-600 px-3 py-1 font-semibold rounded-2xl text-2xl hover:bg-blue-500  cursor-pointer" onClick={()=>{localStorage.clear();navigate('/')}}>Logout</button>
          </ul>
          <div className="md:hidden sm:w-[1/3] md:self-end  "onClick={()=>{setShowdropdown(!showdropdown);console.log(showdropdown)}}><CgProfile className="text-white font-bold size-8 cursor-pointer" /></div>
          {showdropdown && (
  <motion.div
    initial={{ opacity: 0, y: -10, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -10, scale: 0.9 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="absolute right-5 top-20 w-48 flex flex-col gap-3 bg-slate-800 py-4 px-5 rounded-xl shadow-2xl z-50 md:hidden"
  >
    <div className="text-white text-lg font-semibold">{username}</div>
    <button
      className="bg-red-600 text-white text-base py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
      onClick={() => {
        localStorage.removeItem("email");
        navigate("/");
      }}
    >
      Delete Account
    </button>
    <button
      className="bg-blue-600 text-white text-base py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-200"
      onClick={() => {
        localStorage.removeItem("email");
        navigate("/");
      }}
    >
      Logout
    </button>
  </motion.div>)}

          
        </nav>
    )
}
export default Navbar;

