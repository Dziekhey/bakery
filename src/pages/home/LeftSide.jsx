import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import cookie1 from "../../assets/cookie1.png";

const LeftSide = ({ cookies }) => {
  return (
    <>
      <section className="flex flex-col justify-center pr-20">
        <div className="flex items-center justify-center h-72">
          <div>
            <ArrowBackIosIcon sx={{ fontSize: "40px" }} />
          </div>
          <div className="h-full">
            <img src={cookie1} className="w-full h-full" />
          </div>
          <div>
            <ArrowForwardIosIcon sx={{ fontSize: "40px" }} />
          </div>
        </div>
        <div className="flex justify-center pl-1 pt-6">
          <div className="grid grid-cols-4 w-[435px] justify-center gap-7">
            {cookies.map((cookie) => (
              <div key={cookie.id} className="w-20 space-x-3 h-20">
                <img src={cookie.image} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftSide;
