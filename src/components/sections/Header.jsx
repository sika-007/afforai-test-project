import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { ButtonPrimary, ButtonFilled } from "../buttons";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-20 top-0 p-0 md:px-8 w-screen md:top-5">
      <div className="w-full backdrop-blur-md border-b md:border py-3 px-4 md:rounded-xl">
        <div className="flex justify-between items-center ">
          <a className="flex-1 cursor-pointer" href="https://afforai.com">
            <img className="w-24" src={logo} alt="logo" />
          </a>
          <div className="flex-1 gap-3 items-center hidden md:flex">
            <a className="font-medium text-[#222222] text-sm cursor-pointer">
              Affiliate
            </a>
            <a className="font-medium text-[#222222] text-sm cursor-pointer">
              Pricing
            </a>
            <a className="font-medium text-[#222222] text-sm cursor-pointer">
              Testimonials
            </a>
            <a className="font-medium text-[#222222] text-sm cursor-pointer">
              Help Center
            </a>
          </div>
          <div className="flex-1 flex gap-2 justify-end">
            <ButtonPrimary width={50}>Login</ButtonPrimary>
            <ButtonFilled width={"fill"}>Try for Free</ButtonFilled>
            <div
              className={`md:hidden border-2 cursor-pointer ${
                open ? "border-violet-600" : ""
              } flex items-center justify-center w-8 rounded-md`}
              onClick={() => setOpen((prev) => !prev)}
            >
              <AiOutlineMenu
                className={`${open ? "text-violet-600" : "text-[#525252]"}`}
              />
            </div>
          </div>
        </div>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } mt-3 gap-1 flex-col  md:hidden`}
        >
          <li>
            <a className="font-bold" href="">
              Affiliate
            </a>
          </li>
          <li>
            <a className="font-bold" href="">
              Pricing
            </a>
          </li>
          <li>
            <a className="font-bold" href="">
              Testimonials
            </a>
          </li>
          <li>
            <a className="font-bold" href="">
              Help Center
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
