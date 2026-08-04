import { Outlet } from "react-router-dom"



const Root = () => {
  return (
    <div className="max-w-8xl  font-poppins">
          <Outlet></Outlet>
    </div>
  
  )
}

export default Root