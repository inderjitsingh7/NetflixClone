import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import LoginSignin from "./pages/loginSign/LoginSignin"
import Dashboard from "./pages/dashbord/Dashboard"
import Player from "./pages/player/Player"
import './index.css'
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginSignin" element={<LoginSignin />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Player/:id" element={<Player />}/>
      </Routes>

      <div className="footer-info">
        <a href="https://www.linkedin.com/in/inderjit-singh-fullstackwebdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a>
        <a href="https://x.com/Inderjit_it?t=E_tTfEKzcbrkLsBeriAlhA&s=08"><BsTwitterX/></a>
        <a href="https://www.instagram.com/inderjit.it?utm_source=qr&igsh=aDJ2em5qMzNpMGZj"><FiInstagram/></a>
        
      </div>
    </>
  )
}

export default App
