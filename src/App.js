import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import HTML from "./pages/Html";
import Logo from "./pages/Logo";
import Css from "./pages/Css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/home" element={<Home/>}/>  
         <Route path="/about" element={<About/>}/>  
         <Route path="/services" element={<Services/>}/>  
         <Route path="/html" element={<HTML/>}/>  
         <Route path="/logo" element={<Logo/>}/>  
         <Route path="/css" element={<Css/>}/>  



        </Routes>

     

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
