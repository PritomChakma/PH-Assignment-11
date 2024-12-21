import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpeg";
import banner3 from "../assets/banner-3.jpg";

// import required modules
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
                  <h1 className="mb-5 text-5xl font-bold">Asphalt 9</h1>
                  <p className="mb-5">
                    Asphalt 9: Legends is an arcade racing game developed and
                    published by Gameloft, released in 2018. It is the latest
                    installment in the Asphalt series and offers an exciting,
                    fast-paced racing experience.
                  </p>
                  <button className="btn bg-gray-900 text-white">
                    Get Started
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
                  <h1 className="mb-5 text-5xl font-bold">Clash of Clans</h1>
                  <p className="mb-5">
                    Clash of Clans (CoC) is a popular free-to-play mobile
                    strategy game developed and published by Supercell. Released
                    in 2012, it has remained a favorite among gamers for its mix
                    of base-building, resource management, and strategic combat.
                  </p>
                  <button className="btn bg-gray-900 text-white">
                    Get Started
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
                    The Legend of Zelda
                  </h1>
                  <p className="mb-5">
                    The Legend of Zelda: Breath of the Wild (BotW) is an
                    open-world action-adventure game developed and published by
                    Nintendo. Released in 2017 for the Nintendo Switch and Wii
                    U, it is widely considered one of the greatest video games
                    of all time.
                  </p>
                  <button className="btn bg-gray-900 text-white">
                    Get Started
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
