import React from "react";

const Form = () => {
  return (
    <div className="w-full">
      <span className="text-[#828282]">Want us to contact you?</span>
      <div className="w-full justify-between flex bg-[#F2F2F2] rounded-2xl mt-2">
        <input className="bg-[#F2F2F2] pl-4 rounded-2xl" type="email" placeholder="Email" />
        <button className="cursor-pointer bg-[#2D9CDB] text-white px-8 py-4 rounded-2xl">Join</button>
      </div>
    </div>
  )
};

export default Form;
