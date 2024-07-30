import React from "react";
import OfferBanner from "../../sections/home-sections/OfferBanner";
import Navbar from "../../components/Navbar";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { cookies } from "../../data/Cookies";

const HomePage = () => {
  return (
    <>
      <OfferBanner />
      <Navbar />
      <div className="grid grid-cols-2 space-x-10 px-24 py-4">
        <LeftSide cookies={cookies} />
        <RightSide />
      </div>
    </>
  );
};

export default HomePage;
