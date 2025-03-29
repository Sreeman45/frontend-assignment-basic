import { FC } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Mainpage from "../components/mainpage";

const Details: FC = () => {
  return (
    <>
      <header className="w-full">
        <Navbar />
      </header>
      <main className="h-[80vh] flex">
         
        <Sidebar>
          <div className="text-center">Account</div>
        </Sidebar>
        <Mainpage />
      </main>
    </>
  );
};
export default Details;
