import { useLoaderData, useParams } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"


const Project = () => {

  const {id} = useParams();
 
  return (
    
    <div>
      <Navbar></Navbar>
      <div>
        <h2>Eastate Details</h2>
        
        <p>{id}</p>
      </div>
    </div>
  )
}

export default Project