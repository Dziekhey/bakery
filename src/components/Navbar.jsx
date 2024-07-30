import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <>
      <section className="h-14 py-4 px-16 top-12 border-b-2 border-tuatara flex justify-between items-center">
        <div>
          <h1 className="font-light font-sm py-1 px-6 border border-tuatara rounded-full">
            Shop now
          </h1>
        </div>
        <div className="ml-40">
          <h1 className="font-dancing font-bold text-3xl">LOGO</h1>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-5">
            <li className="font-light text-lg">our story</li>
            <li className="font-light text-lg">
              <span>
                <CardGiftcardIcon />
              </span>{" "}
              gifts
            </li>
            <li className="font-light text-lg">contact us</li>
            <li className="font-light text-lg">
              <AccountCircleIcon />
            </li>
            <li className="font-light text-lg">
              <ShoppingCartIcon />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
