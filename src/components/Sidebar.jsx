import React, { useState } from "react";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <div className="sidebar min-h-[100vh] inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-4 ">
      <div className="top">
        <img
          className="menu w-5 block ml-3 cursor-pointer"
          src={assets.menu_icon}
          alt=""
          onClick={() => setMenu((prev) => !prev)}
        />

        <div className="new-chat flex items-center mt-12 gap-3 bg-[#e6eaf1] cursor-pointer text-gray-500 text-sm py-3 px-4 rounded-[50px]">
          <img className="w-5" src={assets.plus_icon} alt="" />
          {menu && <p>New Chat</p>}
        </div>

        {menu && (
          <div className="recent flex flex-col">
            <p className="recent-title mt-7 mb-5">Recent</p>
            <div className=" flex items-start gap-3 p-3 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
              <img src={assets.message_icon} className="w-5" alt="" />
              <p>What is React...?</p>
            </div>
          </div>
        )}
        {/**/}
      </div>

      <div className="bottom flex flex-col">
        {/* */}
        <div className="bottom-item flex items-start gap-3 p-3  rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb] ">
          <img src={assets.question_icon} className="w-5" alt="" />
          {menu && <p>Help</p>}
        </div>

        <div className="bottom-item flex items-start gap-3 p-3 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.history_icon} className="w-5" alt="" />
          {menu && <p>Activity</p>}
        </div>

        <div className="bottom-item flex items-start gap-3 p-3 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
          <img src={assets.setting_icon} className="w-5" alt="" />
          {menu && <p>Settings</p>}
        </div>
        {/**/}
      </div>
    </div>
  );
};

export default Sidebar;
