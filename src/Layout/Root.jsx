import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Shared/Navbar/Navbar"



const Root = () => {
  return (
    <div className="max-w-8xl  font-poppins">
      <Navbar></Navbar>
          <Outlet></Outlet>
    </div>
  
  )
}

export default Root