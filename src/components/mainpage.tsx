import { FC, useEffect, useState } from "react";
import { MoveLeft, MoveRight,Search } from "lucide-react";

const Mainpage: FC = () => {
  const [error, setError] = useState("");
  const [search,setSearch] =useState<string>('')
   const [prevnumber, setprevNumber] = useState(0);
  const [nextnumber, setNextnumber] = useState(10);
  const [displaydata, setDisplayData] = useState([]);
  const [count, setCount] = useState<number>(1);
  
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const displaydata = data.users.slice(prevnumber, nextnumber);
        const actualdata:any=displaydata.filter((i:any)=>(String(i.age).includes(search) || i.username.includes(search) ||i.gender.includes(search)))
        setDisplayData(actualdata);
        console.log(actualdata);
      })
      .catch(() => setError("check your internet connection"));

  }, [prevnumber, nextnumber,search]);
  const handleSort = (sortType: any) => {
    let sortedData = [...displaydata]; // Copy array to avoid mutating state directly
  
    if (sortType === "username") {
      sortedData.sort((a:any, b:any) => a.username.localeCompare(b.username));
    } else if (sortType === "age") {
      sortedData.sort((a:any, b:any) => a.age - b.age);
    }else if(sortType === 'normal'){
      setDisplayData(sortedData)
    }
  
    setDisplayData(sortedData); // Update state
  };
  
  return (
    <div className="w-full z-10">
      <div className="h-auto py-4 flex justify-around items-center md:px-3 w-full mb-4">
        <div   className="h-10  flex justify-between bg-white items-center border-[1.5px] rounded px-2 w-2/5 max-sm:w-3/5">
        <input
          type="text"      
          value={search}
          className="focus:outline-none w-full" onChange={(e)=>setSearch(e.target.value)}
        ></input><Search  className="text-blue-600 font-bold text-2xl "/></div>
        <select className="px-2 py-1 bg-amber-400 text-white font-bold rounded " onChange={(e)=>handleSort(e.target.value)}>
          <option value='normal' >normal</option>
          <option value="username">sort by username</option>
          <option value='age' onClick={()=>displaydata.sort((a: any, b: any) => a.age - b.age)}>sort by age</option>
        </select>
      </div>
      {error && <div>{error}</div>}
      <div className="flex md:justify-around justify-between items-start">
        <div className="flex flex-col gap-4 px-2 py-1">
          <div className="bg-pink-500 p-1 rounded text-white px-2 text-xl md:font-bold md:text-4xl font-semibold ">
            username
          </div>
          <div className="flex flex-col gap-2 w-4/5 ">
            {displaydata.map((i: any) => {
              return <div className="border-b-lime-600 text-lg font-semibold no-overscroll-div-x">{i?.username}</div>;
            })}
          </div>   
        </div>
          <div className="flex flex-col gap-4 px-2 py-1">
            <div className=" text-white px-2 text-xl md:font-bold  font-semibold md:text-4xl bg-pink-500 p-1 rounded">
              university
            </div>
            <div className="flex flex-col gap-2 w-4/5 ">
              {displaydata.map((i: any) => { 
                return (
                  <div className="border-b-lime-600 text-lg font-semibold no-overscroll-div-x">
                    {i?.gender}
                  </div>
                );
              })}
            </div></div>
            <div className="flex flex-col gap-4 px-2 py-1">
              <div className=" text-white px-2 text-xl md:font-bold md:text-4xl font-semibold bg-pink-500 p-1 rounded">
                Phone
              </div>
              <div className="flex flex-col gap-2 w-4/5  border-">
                {displaydata.map((i: any) => {
                  return (
                    <div className="border-b-lime-600 text-lg font-semibold no-overscroll-div-x">
                      {i?.age}
                    </div>
                  );
                })}
              </div>
            
       
        </div>
        </div>
        <div className="mx-auto flex justify-center items-center gap-5 mt-8">
          <button
            className="mt-3 rounded-full p-2 border-[2px] cursor-pointer hover:bg-gray-400"
            onClick={() => {
              setCount((count) => (count > 1 ? count - 1 : 3));
              setprevNumber((i) => (i == 0 ? 20 : i - 10));
              setNextnumber((i) => (i == 10 ? 30 : i - 10));
            }}
          >
            <MoveLeft />
          </button>
          <div className="text-4xl font-bold ">{count}</div>
          <button
            className="mt-3 rounded-full p-2 border-[2px] cursor-pointer hover:bg-gray-400"
            onClick={() => {
              setCount((count) => (count < 3 ? count + 1 : 1));

              setNextnumber((i) => (i == 30 ? 10 : i + 10));
              setprevNumber((i) => (i == 20 ? 0 : i + 10));
            }}
          >
            <MoveRight />
          </button>
       
      </div>
    </div>
  );
};
export default Mainpage;
