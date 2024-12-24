import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpeg";
import banner3 from "../assets/banner-3.jpg";

// import required modules
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="md:w-11/12 mx-auto">
      <div className=" ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="hero w-full h-[470px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner1})`,
              }}
            >
              <div className="bg-opacity-45 hero-overlay"></div>
              <div className="hero-content text-white ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Youth Education Mentor
                  </h1>
                  <p className="mb-5">
                    mpower the next generation by volunteering as a Youth
                    Education Mentor. You'll work with underprivileged children,
                    assisting with homework, organizing creative workshops, and
                    fostering a love for learning. Whether teaching math,
                    science, or art, your guidance can open doors to brighter
                    futures for these young minds. Be the inspiration they need
                    to achieve their dreams.
                  </p>
                  <button className="btn bg-[#EF4C53] text-white">
                    <Link to="/allVolunteer">Vouleenter Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero w-full h-[470px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner2})`,
              }}
            >
              <div className="bg-opacity-45 hero-overlay"></div>
              <div className="hero-content text-white">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    {" "}
                    Elderly Care Companion
                  </h1>
                  <p className="mb-5">
                    Brighten the lives of senior citizens in your community by
                    becoming an Elderly Care Companion. Spend quality time
                    chatting, playing games, or helping with errands. Your
                    kindness and companionship can alleviate loneliness and
                    bring joy to their days. Small gestures make a big
                    difference—help create cherished memories for our seniors.
                  </p>
                  <button className="btn bg-[#EF4C53] text-white">
                    <Link to="/allVolunteer">Vouleenter Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero w-full h-[470px] bg-cover bg-center "
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="bg-opacity-60 hero-overlay"></div>
              <div className="hero-content text-white ">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Community Clean-Up Champion
                  </h1>
                  <p className="mb-5">
                    Join us in making our community a cleaner, greener place to
                    live! As a Community Clean-Up Champion, you'll participate
                    in organizing and executing litter collection drives,
                    recycling initiatives, and awareness campaigns to promote
                    sustainable waste management.
                  </p>
                  <button className="btn bg-[#EF4C53] text-white">
                    <Link to="/allVolunteer">Vouleenter Now</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide><img className='w-full h-[470px]' src={slide4} alt=""/></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
