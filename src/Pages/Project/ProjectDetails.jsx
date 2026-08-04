import { useLoaderData, useParams } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"


const ProjectDetails = () => {

  const { id } = useParams();
  const estates = useLoaderData();
  const estate = estates.find(estate => estate._id === id);

  if (!estate) {
    return (
      <div>
        <Navbar></Navbar>
        <p className="text-center py-10">Estate not found.</p>
      </div>
    )
  }

  const {
    image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities
  } = estate;

  return (

    <div>
     
      <div className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

    {/* Left Side - Image */}
    <figure className="w-full h-[600px] overflow-hidden rounded-xl shadow-lg">
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={estate_title}
      />
    </figure>

    {/* Right Side - Details */}
    <div>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-4xl font-poppins font-bold">
          {estate_title}
        </h2>

        <span className="badge badge-primary capitalize">
          {status}
        </span>
      </div>

      <p className="text-lg text-gray-500 mt-2">{segment_name}</p>

      <p className="text-lg font-semibold mt-2">
        📍 {location}
      </p>

      <div className="flex gap-8 mt-6 text-lg">
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>

        <p>
          <span className="font-bold">Area:</span> {area}
        </p>
      </div>

      <p className="mt-6 leading-8 text-gray-600">
        {description}
      </p>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-3">
          Facilities
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {facilities.map((facility, index) => (
            <li
              key={index}
              className="bg-base-200 rounded-lg p-3"
            >
              ✅ {facility}
            </li>
          ))}
        </ul>
      </div>

      <button className="btn btn-primary mt-8 w-full sm:w-auto">
        Buy Now
      </button>
    </div>

  </div>
</div>
    </div>
  )
}

export default ProjectDetails
