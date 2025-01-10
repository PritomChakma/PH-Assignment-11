import Marquee from "react-fast-marquee";

const Marquee = () => {
    return (
        <div className="flex items-center gap-5 bg-base-200 p-2 my-10 w-11/12 mx-auto">
        <p className="bg-[#F96E2A] text-white px-4 py-2 rounded-md">Brands</p>
  
        <Marquee pauseOnHover={true} className="w-full">
          {watches.map((watch, index) => (
            <img
              key={index}
              className="h-10 mx-5"
              src={watch.brand_logo}
              alt={`Logo of ${watch.brand_name || "Brand"}`}
            />
          ))}
        </Marquee>
      </div>
    );
};

export default Marquee;