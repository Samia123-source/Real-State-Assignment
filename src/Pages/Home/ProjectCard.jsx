import { Link } from "react-router-dom";


const ProjectCard = ({estate}) => {
    const{estate_title,image, location,_id} = estate;
  return (
   
     <div className="card bg-base-100 w-90 shadow-sm">
  <figure  className="w-full h-80 overflow-hidden">
   <Link to={`/projectdetails/${_id}`}> <img className="w-full h-full object-cover hover:scale-105"
      src={image} alt="house" /></Link>
     
  </figure>
  <div className="card-body">
    <h2 className='text-center font-poppins font-bold'>{estate_title}</h2>
    <p>{location}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

  )
}

export default ProjectCard