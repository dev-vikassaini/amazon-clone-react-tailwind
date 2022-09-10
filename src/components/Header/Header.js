import React from "react";
import "./Header.css";
import SubHeader from "./SubHeader";

import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  const href = "#!";

  return (
    <React.Fragment>
      <header className="w-full h-[99px] flex flex-col">
        <div className="main-header w-full h-[60px] bg-black text-white flex flex-row justify-start">
          <div className="w-[70%] flex flex-row">
            <div className="logo-box flex flex-row">
              <div className="w-[129px] h-[60px] flex flex-row pr-1 a-logo1 ml-3">
                <a
                  className="w-[129px] h-[50px] a-logo nav-logo-link"
                  href={{ href }}
                >
                  <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    className="logo h-[35px] logo-img"
                    alt="Amazon Logo"
                  />
                </a>
                <span className="-ml-[1.625rem] mt-3 text-sm">.in</span>
              </div>
            </div>
            <div className="address-box flex flex-row ml-10 text-sm items-center w-44">
              <div className="flex flex-row h-[52px] w-42 items-center my-[0.50rem] mx-[3px]">
                <a href={href}>
                  <div className="flex flex-row pr-2">
                    <div className="flex flex-col mt-2">
                      <span className="material-icons">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[#ccc]">Hello</div>
                      <div className="font-bold">Select your address</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="search-box flex flex-row w-[60%]">
              <div className="flex flex-row items-center">
                <div className="flex flex-row h-10 w-12 bg-[#f3f3f3] text-black rounded-l-[0.4rem] p-[6px]">
                  <span>All</span>{" "}
                  <span>
                    <ArrowDropDownIcon />{" "}
                  </span>
                </div>
                <input type="text" className="h-10 w-[27.3rem]" />
                <div className="h-10 w-12 bg-[#febd69] text-black rounded-r-[0.4rem] p-[6px]">
                  <SearchIcon className="items-center h-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[30%] flex flex-row">
            <div className="internalization-box flex flex-row text-sm items-center w-[5rem]">
              <div className="flex flex-row h-[52px] items-center my-[0.50rem] mx-[3px] w-[66px] pl-3">
                <a href={href} className="flex flex-col font-bold">
                  <span> English</span>
                  <span>
                    🇮🇳 <ArrowDropDownIcon className="text-gray-500" />
                  </span>
                </a>
              </div>
            </div>
            <div className="account-list-box flex flex-row text-sm items-center w-[8rem]">
              <div className="flex flex-row h-[52px] items-center my-[0.50rem] mx-[3px] pr-1 pl-2">
                <a href={href} className="flex flex-col">
                  <span className="text-xs font-bold">
                    Hello{" "}
                    <span className="text-[.65rem] font-bold">Sign in</span>
                  </span>
                  <span className="flex flex-row text-xs font-bold">
                    Account & List{" "}
                    <ArrowDropDownIcon className="text-gray-500 -mt-1" />
                  </span>
                </a>
              </div>
            </div>
            <div className="return-box flex flex-row text-sm items-center w-[5rem]">
              <div className="flex flex-row h-[52px] items-center my-[0.50rem] mx-[3px] pr-1 pl-2">
                <a href={href} className="flex flex-col">
                  <span className="text-xs font-bold">Returns</span>
                  <span className="flex flex-row text-xs font-bold">
                    & Orders
                  </span>
                </a>
              </div>
            </div>
            <div className="cart-box flex flex-row text-sm items-center w-[4rem]">
              <div className="flex flex-row h-[52px] w-42 items-center my-[0.50rem] mx-[3px] pr-1 pl-2">
                <a href={href} className="flex flex-row">
                  <span className="font-bold">
                    <ShoppingCartIcon />
                  </span>
                  <span className="text-xs font-bold"></span>
                  <span className="flex flex-row text-xs font-bold">Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-main-header h-[39px] bg-[#232f3e] flex flex-row justify-start text-white">
          <SubHeader />
        </div>
      </header>
    </React.Fragment>
  );
}
