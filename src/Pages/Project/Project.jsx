import { useLoaderData, useParams } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"


const Project = () => {

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
      <Navbar></Navbar>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <figure className="w-full h-96 overflow-hidden rounded-lg">
          <img className="w-full h-full object-cover" src={image} alt={estate_title} />
        </figure>

        <div className="mt-6">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h2 className="text-3xl font-poppins font-bold">{estate_title}</h2>
            <span className="badge badge-primary capitalize">{status}</span>
          </div>

          <p className="text-lg text-gray-500 mt-1">{segment_name}</p>
          <p className="text-lg font-semibold mt-2">{location}</p>

          <div className="flex gap-6 mt-4">
            <p><span className="font-semibold">Price:</span> {price}</p>
            <p><span className="font-semibold">Area:</span> {area}</p>
          </div>

          <p className="mt-4">{description}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Facilities</h3>
            <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-1">
              {facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>

          <button className="btn btn-primary mt-6">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Project
