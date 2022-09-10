import React from "react";
import AmazonVideo from "../../assets/videos/C1MafucdgNL.mp4";
import editions from "../../assets/images/758x608__books._SY608_CB611601121_.jpg";
import alexa from "../../assets/images/379x304__alexa_3_NEW._SY304_CB610529508_.jpg";
import music from "../../assets/images/758x608__music._SY608_CB611601058_.jpg";
import stream from "../../assets/images/758x608__fire-tv._SY608_CB611703102_.jpg";

function SliderVideo() {
  return (
    <React.Fragment>
      <div className="w-full flex flex-row overflow-hidden">
        <div className="slider-video absolute">
          <video className="w-full" src={AmazonVideo} controls="controls" height="710" muted />
        </div>
        <div className="slider-video flex flex-row items-center relative space-x-5 mt-[650px]">
          <div className="bg-white ml-5 p-5">
            <div className="text-[21px] leading-7 font-bold mb-3"><h1>The Lord of the Rings: new editions</h1></div>
            <div className="w-[250px] h-[276px] mb-3 cursor-pointer">
              <img className="w-[250px] h-[276px]" src={editions} alt="Browse J.R.R. Tolkien books" />
            </div>
            <div className="text-xs font-semibold">
              <a className="text-teal-700 hover:underline hover:text-red-500" href="#!">Browse J.R.R. Tolkien books</a>
            </div>
          </div>
          <div className="bg-white ml-5 p-5">
            <div className="text-[21px] leading-7 font-bold mb-3"><h1>Alexa, play The Rings of Power</h1></div>
            <div className="w-[250px] h-[276px] mb-3 cursor-pointer">
              <img className="w-[250px] h-[276px]" src={alexa} alt="Discover Echo Show" />
            </div>
            <div className="text-xs font-semibold">
              <a className="text-teal-700 hover:underline hover:text-red-500" href="#!">Discover Echo Show</a>
            </div>
          </div>
          <div className="bg-white ml-5 p-5">
            <div className="text-[21px] leading-7 font-bold mb-3"><h1>New music from The Rings of Power</h1></div>
            <div className="w-[250px] h-[276px] mb-3 cursor-pointer">
              <img className="w-[250px] h-[276px]" src={music} alt="Listen on Amazon Music" />
            </div>
            <div className="text-xs font-semibold">
              <a className="text-teal-700 hover:underline hover:text-red-500" href="#!">Listen on Amazon Music</a>
            </div>
          </div>
          <div className="bg-white ml-5 p-5 !mr-5">
            <div className="text-[21px] leading-7 font-bold mb-3"><h1>Stream in vibrant 4K Ultra HD</h1></div>
            <div className="w-[250px] h-[276px] mb-3 cursor-pointer">
              <img className="w-[250px] h-[276px]" src={stream} alt="Watch Now on FireTV" />
            </div>
            <div className="text-xs font-semibold">
              <a className="text-teal-700 hover:underline hover:text-red-500" href="#!">Watch Now on FireTV</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>   
  );
}

export default SliderVideo;
