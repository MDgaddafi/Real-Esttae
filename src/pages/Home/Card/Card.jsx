
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Card = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets and above
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <SectionTitle
        heading={"Homes For You"} subHeading={"Based on your view history"}
        >
        </SectionTitle>
      <div className="w-[100%] mx-auto lg:h-[60vh] md:h-[50vh] h-[60vh]">
      <Slider className="mx-auto" {...settings}>
        <div><MenuCard /></div>
        <div><MenuCard /></div>
        <div><MenuCard /></div>
        <div><MenuCard /></div>
        <div><MenuCard /></div>
      </Slider>
    </div>
    </div>
  );
};

export default Card;
