import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner"
import Navbar from "../Shared/Navbar/Navbar"
import { MdPhone } from "react-icons/md";
import ProjectCard from "./ProjectCard";


const Home = () => {
  const estate = useLoaderData();
// console.log(estate);

console.log("Home loader data:", estate);
console.log("Is array:", Array.isArray(estate));

  return (
    <div>

      <div>

        <Banner></Banner>


      </div>
      <div className="w-6xl p-8 font-poppins text-center">
        <p className=" text-center mt-10">09945858824</p>
        <div>
          <p className="text-5xl font-bold text-center mt-10 mb-5">Dream Estate</p>
          <p className="text-center">Dream Group embodies a thriving consortium of distinguished enterprises and progressive initiatives, spanning sectors from real estate, ready-made garments, and composite textiles to consumer goods, information technology, financial services, and agricultural exports. With a dedicated team of over 18,500 members, Dream estate is a testament to excellence, innovation, and a commitment to sustainable growth across diverse industries.</p>
        </div>
        <div>
          <p className="text-5xl text-center my-12 font-bold ">Project</p>
          {/* project container */}
          <div className="grid grid-cols-3 gap-3">
            {
              estate.map(house => (
                <ProjectCard
                  key={house._id}
                  estate={house}
                />
              ))
            }
          </div>


        </div>

      </div>
    </div>



  )
}

export default Home