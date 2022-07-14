import React from "react";
import instagram from "../assets/images/instagram.svg"
import linkedin from "../assets/images/linkedin.svg"
import twitter from "../assets/images/twitter.svg"
import { HashLink } from "react-router-hash-link";
import Form from "./Form";

const Footer = () => {
  return (
    <footer id="footer" className=" px-14 bg-[#100E1D] text-white pt-8 mt-20">
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center">
        <ul className=" leading-9 mb-12">
        <HashLink to="#home" smooth> <li className="cursor-pointer">Home</li> </HashLink>
       <HashLink to="#services" smooth><li className="cursor-pointer">Services</li></HashLink>
       <HashLink to="#designs" smooth><li className="cursor-pointer">Our Works</li></HashLink>
       <HashLink to="#clients" smooth><li className="cursor-pointer">Clients</li></HashLink>
       <HashLink to="#footer" smooth><li className="cursor-pointer">Contact</li></HashLink>
        </ul>
        <div className="mb-16 md:self-start">
          <h1 className="text-3xl font-bold mb-2">Edie</h1>
          <div className="flex gap-3 items-center">
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img className="pt-[1px]" src={twitter} alt="" />
          </div>
        </div>
        <div className="md:self-baseline">
          <Form/>
        </div>
      </div>
      <div className="text-sm text-center w-full mt-24">created by <strong>dedicatedksta</strong></div>
    </footer>
  )
};

export default Footer;
