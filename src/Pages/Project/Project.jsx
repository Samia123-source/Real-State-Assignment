import { useLoaderData } from "react-router-dom";
import ProjectCard from "../Home/ProjectCard";

const Project = () => {
  const estate = useLoaderData();

  return (
    <div className="w-6xl mx-auto p-8 font-poppins text-center">
      <p className="text-5xl text-center my-12 font-bold">Project</p>
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
  )
}

export default Project
