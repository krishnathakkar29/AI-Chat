import React from "react";

const Card = ({ content, image }) => {
  return (
    <div className="card h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative hover:bg-[#dfe4ea]">
      <p className="text-[#585858] text-md" >{content}</p>
      <img className="w-9 p-1 absolute bg-white rounded-[20px] bottom-2 right-2" src={image} alt="" />
    </div>
  );
};

export default Card;
