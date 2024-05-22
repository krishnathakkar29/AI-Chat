import React from "react";
import { assets } from "../assets/assets";
import Card from "./Card";

const cardsArr = [
  {
    content: " Suggest beautiful places to see on an upcoming road trip",
    img: assets.compass_icon,
  },
  {
    content: " Briefly summarize this concept: urban planning  ",
    img: assets.bulb_icon,
  },
  {
    content: " Brainstorm team bonding activities for our work retreat",
    img: assets.message_icon,
  },
  {
    content: "Tell me about Reactjs and React Native",
    img: assets.code_icon,
  },
];

const Main = () => {
  return (
    <div className="main flex-1 min-h-screen relative">
      <div className="nav flex justify-between items-center text-2xl p-5 text-[#585858] ">
        <p>AI</p>
        <img src={assets.user_icon} className="w-10 rounded-3xl" alt="" />
      </div>
      {/** */}

      <div className="main-container max-w-[900px] m-auto">
        <div className="greet mt-6 mb-6 mr-0 ml-0 text-[44px] p-5 text-[#c4c7c5] font-normal">
          <p>
            <span className="">Hello, Sir</span>
          </p>
          <p>I am here to help 😎</p>
        </div>

        <div className="cards">
          {cardsArr.map((item, index) => {
            return <Card key={index} content={item.content} image={item.img} />;
          })}
        </div>

        <div className="bottom absolute bottom-0 w-full max-w-[900px] pl-4 pr-4 m-auto">
          <div className="search-box flex items-center justify-between gap-4  pt-2 pb-2 pl-4 pr-4 rounded-[50px] bg-[#f0f4f9] ">
            <input
              type="text"
              placeholder="Fire your questions... "
              className=" flex-1 bg-transparent outline-none border-none p-2 text-lg"
            />
            <div className="flex items-center gap-3">
              <img
                src={assets.gallery_icon}
                alt=""
                className="w-5 inline-block"
              />
              <img src={assets.menu_icon} alt="" className="w-5 inline-block" />
              <img src={assets.send_icon} alt="" className="w-5 inline-block" />
            </div>
          </div>
          <div className="info text-sm text-gray-600 ml-auto mr-auto mt-3 mb-3 text-center font-normal ">
            <p>
              AI may display inaccurate info, including about people, so
              double-check its responses. Your privacy and AI Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
