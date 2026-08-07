import { useContext, useState } from "react"
import { AuthContext } from "../../Providers/AuthProvider"




const Profile = () => {
    const{user, updateUser} = useContext(AuthContext);

    const [name, setName] = useState(user?.displayName || '');
    const[photo, setPhoto] = useState(user?.photoURL || '');

    const handleUpdate = (e) =>{
    e.preventDefault();

     updateUser(name, photo)
    .then(() => {
        alert('Profile Updated Successfully');
    })
    .catch((error)=>{
        console.log(error);
    })
    
    }

   

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">
        My Profile
      </h2>

      <form onSubmit={handleUpdate} className="space-y-4">

        <div>
          <label>Name</label>
          <input
            className="input input-bordered w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            className="input input-bordered w-full"
            value={user?.email}
            readOnly
          />
        </div>

        <div>
          <label>Photo URL</label>
          <input
            className="input input-bordered w-full"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>

        <div>
          <img
            src={photo}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        <button className="btn btn-primary w-full">
          Save Changes
        </button>

      </form>
    </div>
  
  )
}

export default Profile