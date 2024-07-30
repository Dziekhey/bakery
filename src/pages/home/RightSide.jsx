import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FlavorCard from "../../components/FlavorCard";
import HomeTabs from "../../sections/home-sections/HomeTabs";

const RightSide = () => {
  const getAverageRating = () => {
    const rating = 5;
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<StarIcon key={i} sx={{ color: "#f6e525", fontSize: "18px" }} />);
    }

    return stars;
  };

  return (
    <>
      <section>
        <div>
          <h1 className="font-bold text-2xl">
            Vegan Chocolate Chip Cookie Dough
          </h1>
        </div>
        <div className="flex items-center mt-2">
          <h1 className="text-md font-light underline underline-offset-2">
            Nutrition facts
          </h1>
          <div className="flex space-x-2 pl-5">
            <div>{getAverageRating()}</div>
            <h1 className="text-md font-light">| 15 reviews</h1>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-md font-light">
            <span>Flavor: </span>Chocolate Chip
          </h1>
        </div>
        <div className="flex space-x-5 mt-2">
          {[1, 2, 3].map((item) => (
            <FlavorCard />
          ))}
        </div>
        <h1 className="text-md font-light mt-2">Select your plan:</h1>
        <div className="flex justify-between border bg-light_pink border-tuatara p-3 rounded-2xl">
          <h1>One-time Order</h1>
          <h1>$12.99</h1>
        </div>
        <div className="flex justify-between items-center mt-3 py-4 px-8 bg-light_pink rounded-3xl">
          <div>
            <h1>Subscribe & save 15%</h1>
            <h1 className="italic font-light">no commitment, cancel anytime</h1>
          </div>
          <h1 className="font-light">$11.04</h1>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-10 border border-tuatara py-1 px-4 rounded-3xl">
            <button className="text-2xl font-medium">-</button>
            <h1 className="text-xl font-medium">1</h1>
            <button className="text-2xl font-medium">+</button>
          </div>
          <div className="flex items-center border border-tuatara py-1 px-24 bg-supernova rounded-3xl">
            <h1 className="text-xl font-medium">Add to cart</h1>
          </div>
        </div>
        <div className="mt-1">
          <HomeTabs />
        </div>
      </section>
    </>
  );
};

export default RightSide;
