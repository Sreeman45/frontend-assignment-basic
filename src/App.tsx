import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./pages/Loginsignup";
import Details from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />}></Route>
        <Route path="/details" element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
