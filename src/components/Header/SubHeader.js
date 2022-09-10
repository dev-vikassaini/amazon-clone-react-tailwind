import React from "react";
import "./SubHeader.css";
import MenuIcon from "@mui/icons-material/Menu";

function SubHeader() {
  const href = "#!";

  return (
    <React.Fragment>
      <div className="all-menu flex flex-row text-sm items-center w-[4rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[66px] pl-2">
          <a href={href} className="flex flex-row">
            <span className="-mt-1">
              <MenuIcon className="text-gray-500" />
            </span>
            <span> All</span>
          </a>
        </div>
      </div>

      <div className="all-menu flex flex-row text-sm items-center w-[3rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[50px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Sell</span>
          </a>
        </div>
      </div>

      <div className="all-menu flex flex-row text-sm items-center w-[6rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[92px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Best Sellers</span>
          </a>
        </div>
      </div>

      <div className="all-menu flex flex-row text-sm items-center w-[4.5rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[90px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Mobiles</span>
          </a>
        </div>
      </div>

      <div className="all-menu flex flex-row text-sm items-center w-[7rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[100px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Today's Deals</span>
          </a>
        </div>
      </div>

      <div className="all-menu flex flex-row text-sm items-center w-[4rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[70px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Books</span>
          </a>
        </div>
      </div>
      <div className="all-menu flex flex-row text-sm items-center w-[8rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[150px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Customer Service</span>
          </a>
        </div>
      </div>
      <div className="all-menu flex flex-row text-sm items-center w-[5.5rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[100px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Electronics</span>
          </a>
        </div>
      </div>
      <div className="all-menu flex flex-row text-sm items-center w-[4.2rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[80px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Fashion</span>
          </a>
        </div>
      </div>
      <div className="all-menu flex flex-row text-sm items-center w-[3.5rem]">
        <div className="flex flex-row h-[30px] items-center my-[0.3rem] mx-[3px] w-[70px] pl-2">
          <a href={href} className="flex flex-row">
            <span>Prime</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SubHeader;
