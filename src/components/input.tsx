import {  useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
interface setPassword{
    setPassword:React.Dispatch<React.SetStateAction<string>>
    password:string
   
} 
const Input= ({setPassword,password}:setPassword) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
 
  return (
    <div className="flex justify-between border-2 border-black rounded w-4/5 self-center px-2 h-8 items-center ">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
        className="focus:outline-none placeholder:text-bold w-full"
        
      />
      {showPassword ? (
        <FaRegEye className="text-blue-700 size-8 cursor-pointer " onClick={() => setShowPassword((prev) => !prev)} />
      ) : (
        <FaRegEyeSlash className=" size-8 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)} />
      )}
    </div>
  );
};
export default Input;
