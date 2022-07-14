import React from "react";

const Design = ({design}) => {
  return (
    <div className="mb-8">
      <img className=" rounded-3xl mb-2" src={design.image} alt="" />
      <span className="text-xs text-gray-400">{design.title}</span>
      <h1 className="text-lg">{design.body}</h1>
    </div>
  )
};

export default Design;
