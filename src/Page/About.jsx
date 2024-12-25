import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
const About = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="space-y-12">
          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg">
              At <span className="font-bold">Voluntero</span>, our mission is to
              connect passionate individuals with opportunities to make a
              positive impact in their communities. We strive to create a world
              where every act of kindness contributes to a better future.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6  rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Volunteer Matching
                </h3>
                <p>
                  We connect volunteers with opportunities based on their skills
                  and interests, making it easy to find meaningful ways to
                  contribute.
                </p>
              </div>
              <div className="p-6  rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">Event Management</h3>
                <p>
                  Manage, promote, and join volunteer events seamlessly through
                  our platform.
                </p>
              </div>
              <div className="p-6  rounded shadow-md">
                <h3 className="text-xl font-semibold mb-2">Impact Tracking</h3>
                <p>
                  Track your volunteer hours and contributions to measure the
                  difference you’ve made.
                </p>
              </div>
            </div>
          </section>

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid  md:grid-cols-4 gap-5 w-11/12 mx-auto my-5">
            <div className="max-w-sm rounded-lg shadow-lg overflow-hidden  hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src={team1}
                alt="Team Member"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-semibold ">Jonathan Doe</h1>
                <p className="text-sm  mt-2">
                  <span className="font-medium">Email:</span>
                  jonathan.doe@example.com
                </p>
                <div className="flex space-x-4 mt-4">
                  <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
                  <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
                  <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
                  <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src={team2}
                alt="Team Member"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-semibold ">George Bell</h1>
                <p className="text-sm  mt-2">
                  <span className="font-medium">Email:</span>{" "}
                  George.doe@example.com
                </p>
                <div className="flex space-x-4 mt-4">
                  <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
                  <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
                  <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
                  <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src={team3}
                alt="Team Member"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-semibold ">Laura Fenty</h1>
                <p className="text-sm  mt-2">
                  <span className="font-medium">Email:</span>{" "}
                  Laura.doe@example.com
                </p>
                <div className="flex space-x-4 mt-4">
                  <i className="fa-brands fa-facebook-f text-blue-600 text-lg"></i>
                  <i className="fa-brands fa-instagram text-pink-600 text-lg"></i>
                  <i className="fa-brands fa-whatsapp text-green-600 text-lg"></i>
                  <i className="fa-brands fa-twitter text-blue-400 text-lg"></i>
                </div>
              </div>
            </div>

            <div className="max-w-sm rounded-lg shadow-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <img
                src={team4}
                alt="Team Member"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h1 className="text-2xl font-semibold ">Cameron Poll</h1>
                <p className="text-sm  mt-2">
                  <span className="font-medium">Email:</span>{" "}
                  Cameron.doe@example.com
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

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Success Stories
            </h2>
            <div className="space-y-4">
              <h2 className="p-4 ">
                "Voluntero made it so easy to find an opportunity that matched
                my skills. I’ve loved contributing to my community and seeing
                the impact firsthand!" – Jane Doe
              </h2>
              <h2 className="p-4 ">
                "The platform is intuitive and has helped our organization
                connect with amazing volunteers!" – Community Org
              </h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
