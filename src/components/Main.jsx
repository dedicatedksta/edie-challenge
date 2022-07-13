import React from "react";
import mainImage from "../assets/images/heroImage.jpg"
import Form from "./Form";

const Main = () => {
  return (
  <section >
    <div className="flex flex-col mt-14 lg:px-32 xl:px-[17rem] md:px-12 px-14">
      <span className=" text-base text-[#2D9CDB]">Unhappy with your website?</span>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal">We create beautiful <br /> and fast web services</h1>
    </div>
    <div className="w-screen">
      <img className="w-[96vw] xl:h-[46vh] mx-auto h-[18vh] md:h-[26vh] lg:h-[32vh] mt-6 rounded-3xl" src={mainImage} alt="Main Image" />
    </div>
    <div className="flex flex-col items-start mt-14 justify-center md:max-w-xl lg:max-w-2xl xl:max-w-5xl lg:px-32 xl:px-[17rem] px-14">
      <h1 className="text-3xl lg:text-4xl">Story, emotion <br /> and purpose</h1>
      <p className="mt-6">We help transform your ideas into real world applications that will outperform your toughest competition and help you achieve your strategic goals in short period of time.</p>
      <Form/>
    </div>
    
  </section>
  )
};

export default Main;
