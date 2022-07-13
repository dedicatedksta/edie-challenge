import React from "react";

const Service = ({service}) => {
  console.log(service)
  return (
    <div className="mb-24 shadow-2xl px-7 py-9 xl:px-4 xl:py-6 rounded-3xl">
      <div className={`${service.color} font-2xl text-white flex justify-center items-center rounded-xl h-14 w-14 mb-6`}>
        {service.icon}
      </div>
      <h1 className="font-bold text-xl mb-6">{service.title}</h1>
      <p className="text-base">{service.body}</p>
      {service.btnDisabled?
      <button className="cursor-pointer bg-gray-200 text-gray-600 py-2 px-3 rounded-xl mt-6">Get started</button>
      :<button className="cursor-pointer bg-blue-400 text-white py-2 px-3 rounded-xl mt-6">Get started</button>
      }
      
    </div>
  )
};

export default Service;
