import { Link } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import Register from "../Register/Register"


const Login = () => {
  return (
  <div>
    <Navbar></Navbar>
    <h2 className="text-3xl text-center my-10">Login to your account</h2>
    <form>
      <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
    </form>
     <p className="text-center mt-4 ">Don't have an account?<Link className='text-blue-600 font-bold ml-2' to={'/register'}>Register</Link>
        </p>
  </div>
  )
}

export default Login