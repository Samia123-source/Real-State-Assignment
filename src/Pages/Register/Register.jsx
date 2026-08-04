import { Link } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"


const Register = () => {
  return (
   
    <div>
      
      <h2 className="text-3xl text-center my-10">Register Your Account</h2>
      <form>
        <fieldset className="fieldset">
          <label className="text">You Name</label>
          <input type="text" className="input" name='name' required placeholder="Name" />
          <label className="text">PhotoURL</label>
          <input type="text" className="input" name='photourl' required placeholder="Photo" />
          <label className="label">Email</label>
          <input type="email" className="input" name='email' required placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' required placeholder="Password" />
          
          <p><input type="checkbox" className="appearance-none checked:bg-blue-500" />Accept term and conditions</p>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
              <p className="text-center mt-4 ">Already have an account? <Link className="text-blue-600 font-bold ml-2" to='/login'>Login</Link> </p>

    </div>
     
  )
}

export default Register