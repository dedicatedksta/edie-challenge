import React from "react";
import {designs} from "../data/designs"
import Design from "./Design";

const Designs = () => {
  return (
    <div id="designs" className="px-14 mb-10 lg:px-10 xl:px-[16vw]">
      <h1 className="text-2xl mb-10 px-8">Good design means <br /> good business</h1>
      <div className="md:grid md:grid-cols-2 gap-6">
        {designs.map(design=><Design design={design}/>)}
      </div>
      <a className="text-blue-400 text-base mt-8">see more →</a>
    </div>
  )
};

export default Designs;
