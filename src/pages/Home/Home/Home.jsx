

import FeedBack from "../../FeedBack/FeedBack";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";


const Home = () => {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-[95%] mx-auto">
      <Banner></Banner>
      <Card></Card>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;