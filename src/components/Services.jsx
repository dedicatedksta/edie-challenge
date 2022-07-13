import React from "react";
import { services } from "../data/services";
import Service from "./Service";

const Services = () => {

  return (
    <div className="flex flex-col px-8 md:px-5 lg:px-10 xl:px-[16vw]  md:flex-row lg:gap-3">
      {services.map(service=><Service key={service.id} service={service}/>)}
    </div>
  )
};

export default Services;
