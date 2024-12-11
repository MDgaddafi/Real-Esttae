import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const Banner = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])


  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      // You can add more configuration options here
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <div>
      {loading ? (
        <div className="w-[100%] mt-5 lg:h-[60vh] md:h-[40vh] h-[30vh] skeleton shrink-0 rounded-lg mx-auto"></div>
      ) : (
        <div className="mb-16 mt-5 " style={{ width: "100%", borderRadius: "15px" }}>
          <Slider {...settings}>
            <div className="relative  ">
              <div data-aos="fade-right" className="absolute inset-0 flex flex-col gap-2 items-center mx-auto justify-center">
                <h1 className="text-white lg:text-lg md:text-lg text-xs px-5 p-2 bg-black/30 border-white border-2 rounded-full">LET US GUIDE YOUR HOME</h1>
                <h1 className="text-white font-bold md:text-4xl text-lg rounded-full px-5 p-2 bg-black/30 lg:text-6xl">
                  Discover a place you'll love to live
                </h1>
                <button className="btn bg-primary md:text-lg border-none rounded-full hover:bg-black/40 lg:text-lg text-white px-10">Click me</button>
              </div>
              <img className="bg-cover bg-no-repeat rounded-xl lg:h-[60vh] md:h-[40vh] h-[30vh]"
                src="https://justhomnextjs.vercel.app/_next/static/media/slider-home-1.4d4857cf.jpg"
                alt="Slide 1"
                style={{ width: "100%" }}
              />
            </div>
            <div className="relative">
              <div data-aos="fade-right" className="absolute inset-0 flex flex-col gap-2 items-center mx-auto justify-center">
                <h1 className="text-white lg:text-lg md:text-lg text-xs px-5 p-2 bg-black/30 border-white border-2 rounded-full">LET US GUIDE YOUR HOME</h1>
                <h1 className="text-white font-bold md:text-4xl text-lg rounded-full px-5 p-2 bg-black/30 lg:text-6xl">
                  Discover a place you'll love to live
                </h1>
                <button className="btn bg-primary md:text-lg border-none rounded-full hover:bg-black/40 lg:text-lg text-white px-10">Click me</button>
              </div>
              <img className="bg-cover rounded-xl bg-no-repeat lg:h-[60vh] md:h-[40vh] h-[30vh]"
                src="https://justhomnextjs.vercel.app/images/slider/slider-properties-1.jpg"
                alt="Slide 2"
                style={{ width: "100%" }}
              />
            </div>
            <div className="relative">
              <div data-aos="fade-right" className="absolute inset-0 flex flex-col gap-2 items-center mx-auto justify-center">
                <h1 className="text-white lg:text-lg md:text-lg text-xs px-5 p-2 bg-black/30 border-white border-2 rounded-full">LET US GUIDE YOUR HOME</h1>
                <h1 className="text-white font-bold md:text-4xl text-lg rounded-full px-5 p-2 bg-black/30 lg:text-6xl">
                  Discover a place you'll love to live
                </h1>
                <button className="btn bg-primary md:text-lg border-none rounded-full hover:bg-black/40 lg:text-lg text-white px-10">Click me</button>
              </div>
              <img className="bg-cover rounded-xl bg-no-repeat lg:h-[60vh] md:h-[40vh] h-[30vh]"
                src="https://justhomnextjs.vercel.app/images/house/home-4.jpg"
                alt="Slide 3"
                style={{ width: "100%" }}
              />
            </div>
            <div className="relative">
              <div data-aos="fade-right" className="absolute inset-0 flex flex-col gap-2 items-center mx-auto justify-center">
                <h1 className="text-white lg:text-lg md:text-lg text-xs px-5 p-2 bg-black/30 border-white border-2 rounded-full">LET US GUIDE YOUR HOME</h1>
                <h1 className="text-white font-bold md:text-4xl text-lg rounded-full px-5 p-2 bg-black/30 lg:text-6xl">
                  Discover a place you'll love to live
                </h1>
                <button className="btn bg-primary md:text-lg border-none rounded-full hover:bg-black/40 lg:text-lg text-white px-10">Click me</button>
              </div>
              <img className="bg-cover rounded-xl bg-no-repeat lg:h-[60vh] md:h-[40vh] h-[30vh]"
                src="https://justhomnextjs.vercel.app/images/house/home-3.jpg"
                alt="Slide 4"
                style={{ width: "100%" }}
              />
            </div>
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Banner;