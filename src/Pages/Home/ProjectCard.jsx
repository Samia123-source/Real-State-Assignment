import { Link } from "react-router-dom";


const ProjectCard = ({estate}) => {
   
    const{estate_title,image, location,_id} = estate;
  return (
   
<div className="card w-full max-w-sm mx-auto bg-base-100 shadow-sm">
  <figure className="w-full h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
   
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={estate_title}
      />
   
  </figure>

  <div className="card-body">
    <h2 className="text-lg sm:text-xl font-poppins font-bold text-center">
      {estate_title}
    </h2>

    <p className="text-sm sm:text-base">{location}</p>

    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm sm:btn-md"><Link to={`/projectdetails/${_id}`}>
        View Property</Link>
      </button>
    </div>
  </div>
</div>

  )
}

export default ProjectCard