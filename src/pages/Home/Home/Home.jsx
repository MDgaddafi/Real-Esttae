
import FeedBack from "../../FeedBack/FeedBack";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";


const Home = () => {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-[95%] mx-auto">
      <Banner></Banner>
      <Card></Card>
     <div className="mt-48 mb-10">
     <SectionTitle
        heading={"Latest User review"}
        subHeading={"What our customers are saying us?"}
      ></SectionTitle>
     </div>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;