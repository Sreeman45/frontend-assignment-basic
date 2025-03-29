import { FC, useState } from "react";
import Input from "../components/input";
import { useNavigate } from "react-router-dom";
const LoginSignup: FC = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const[emailerror,setemailError]=useState<string>('')
  const[passworderror,setPasswordError]=useState<string>('')
  const emailInput=(value:any)=>{
    if(!value){
      return setemailError('Please provide an email')
      
    }
    let localitem=localStorage.getItem('email')
    if(value === localitem ){
      return setemailError('email already registered')
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(value)){
      return setemailError('Invalid email format')
    }
    else{
       setemailError('');
       return true;

    }
  }
  const passwordInput=(value:any)=>{
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be at least 8 characters, and contain at least one letter and one number');
      return false;
    } else {
      setPasswordError('');
      return true
    }
    console.log(passworderror)
  }
  const handlesignup=()=>{
      const a=emailInput(email); // Run validation & get result
     const b=passwordInput(password); // Run validation & get result
   if(!a  || !b){
        return
   }
    if (!emailerror && !passworderror) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      navigate("/details"); 
      return;
    }
    return
  }
  const handlelogin=()=>{
   
    const useremail= localStorage.getItem('email')
   const userpassword=localStorage.getItem('password')
   if((useremail === email) && (userpassword === password)){
    return  navigate('/details')
   }
   return setPasswordError('Invalid email or password'),setemailError('');
   
   }
   
 
  return (
    <main className="flex justify-center items-center h-screen w-full fullbgcolor text-black font-[poppins] ">
      <div className="sm:w-4/10 xl:w-3/10 w-8/10 boxcolor flex flex-col rounded py-6">
        <h1 className="mx-auto md:text-4xl text-3xl font-bold ">
          Login/Signup
        </h1>
        <div className="w-4/5 self-center">
          <h3 className="mt-6 font-semibold text-lg ">Email</h3>
        </div>
        <input
          type="email"
          className="w-4/5 mt-0.5 border-2 focus:border-black rounded h-8 self-center px-2"
          placeholder="Enter your email"
          onChange={(e)=>{setEmail(e.target.value)}}
        ></input>
          <div className="w-4/5 self-center ">
        <p className=" text-sm text-red-500 ">{emailerror}</p> </div>
        <div className="w-4/5 self-center">
          <h3 className="mt-6 font-semibold text-lg ">Password</h3>
        </div>
        <Input setPassword={setPassword} password={password} />
        <div className="w-4/5 self-center ">
        <p className=" text-sm text-red-500 ">{passworderror}</p> </div>
        <div className="w-4/5 self-center mt-5">
          <button onClick={handlesignup}className="mt-6 font-semibold text-lg bg-blue-800 hover:bg-blue-600 w-full rounded py-1 cursor-pointer text-white">
            Signup
          </button>
        </div>
        <div className="w-4/5 self-center mt-5">
          <button onClick={handlelogin} className="mt-1 font-semibold text-lg bg-blue-800 hover:bg-blue-600 w-full rounded py-1 cursor-pointer text-white">
            Login
          </button>
        </div>
      </div>
    </main>
  );
};
export default LoginSignup;
