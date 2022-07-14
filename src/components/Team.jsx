import React from "react";
import person1 from "../assets/images/person1.png"
import person2 from "../assets/images/person2.png"
import person3 from "../assets/images/person3.png"
import person4 from "../assets/images/person4.png"


const Team = () => {
  return (
    <div id="clients" className="px-11 lg:px-20 xl:px-[18vw]">
      <div className="flex-col md:flex-row flex items-center justify-between">
        <div >
          <span className="text-red-500 xl:text-lg">Meet the team</span>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl mt-4 mb-4 leading-10">We are chilled <br /> and a laidback <br /> team</h1>
          <h3 className="xl:text-lg">Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</h3>
        </div>
        <div className="flex items-center mt-8">
          <div className="pr-3">
            <img className="rounded-3xl h-[180px] lg:h-[260px] xl:h-[360px]" src={person3} alt="" />
          </div>
          <div>
            <img className="rounded-3xl h-[160px] lg:h-[230px] xl:h-[300px] pb-2" src={person1} alt="" />
            <img className="rounded-3xl h-[180px] lg:h-[260px] xl:h-[360px]" src={person2} alt="" />
          </div>
        </div>
      </div>
      <h1 className="text-2xl mt-20 lg:px-12">
      “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
      </h1>
      <div className="flex mt-8 lg:px-12">
        <img className=" h-20 rounded-2xl" src={person4} alt="" />
        <div className="px-8 flex justify-center flex-col">
          <h1 className="text-2xl">Carlos Tran</h1>
          <h2 className="text-lg text-gray-400">The Decorate Gatsby</h2>
        </div>
      </div>
    </div>
  )
};

export default Team;
