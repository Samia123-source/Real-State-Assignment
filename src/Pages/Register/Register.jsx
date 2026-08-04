import { Link } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"


const Register = () => {
  return (
   
   <div className=" flex flex-col items-center justify-center">
    
      <div className="flex flex-col w-1/4">

    <h2 className="text-3xl text-center pt-32 pb-10">Register your account</h2>
         <form className="w-full">
      <fieldset className="fieldset w-full place-items-center">
          <label className="text-start justify-self-start">You Name</label>
          <input type="text" className="input w-full mb-2" placeholder="Nmae" />
          <label className="text-start justify-self-start">Photo URL</label>
          <input type="text" className="input w-full mb-2" placeholder="Photo" />
          <label className="text-start justify-self-start">Email</label>
          <input type="email" className="input w-full mb-2" placeholder="Email" />
          <label className="text-start justify-self-start">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </fieldset>
    </form>
              <p className="text-center mt-4 ">Do you not have an account? <Link className="text-blue-600 font-bold ml-2" to='/register'>Register</Link> </p>

    </div>
    </div>
     
  )
}

export default Register