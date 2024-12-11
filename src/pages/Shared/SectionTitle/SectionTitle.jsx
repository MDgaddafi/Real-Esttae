

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="">
      <h2 className="font-bold lg:text-5xl md:text-4xl text-2xl text-center lg:mt-48 md:mt-24 mt-10 lg:py-5 md:py-3">{heading}</h2>
      <p className="lg:text-lg md:text-lg text-center ">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;