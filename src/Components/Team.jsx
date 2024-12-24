import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
const Team = () => {
  return (
    <div className="grid  md:grid-cols-4 gap-5 md:w-11/12 mx-auto my-5">
      {/* team 1 */}
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden  hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <img
          src={team1}
          alt="Team Member"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold ">Jonathan Doe</h1>
          <p className="text-sm  mt-2">
            <span className="font-medium">Email:</span> jonathan.doe@example.com
          </p>
          <div className="flex space-x-4 mt-4">
            <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
            <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
            <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
            <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
          </div>
        </div>
      </div>
      {/* team 2 */}
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <img
          src={team2}
          alt="Team Member"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold ">George Bell</h1>
          <p className="text-sm  mt-2">
            <span className="font-medium">Email:</span> George.doe@example.com
          </p>
          <div className="flex space-x-4 mt-4">
            <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
            <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
            <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
            <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
          </div>
        </div>
      </div>
      {/* team 3 */}
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <img
          src={team3}
          alt="Team Member"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold ">Laura Fenty</h1>
          <p className="text-sm  mt-2">
            <span className="font-medium">Email:</span> Laura.doe@example.com
          </p>
          <div className="flex space-x-4 mt-4">
            <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
            <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
            <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
            <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
          </div>
        </div>
      </div>
      {/* team 4 */}
      <div className="max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
        <img
          src={team4}
          alt="Team Member"
          className="w-full h-56 object-cover"
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold ">Cameron Poll</h1>
          <p className="text-sm  mt-2">
            <span className="font-medium">Email:</span> Cameron.doe@example.com
          </p>
          <div className="flex space-x-4 mt-4">
            <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
            <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
            <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
            <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
