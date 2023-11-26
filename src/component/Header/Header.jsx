import React, { useState, useEffect, useRef } from "react";
import WOW from "wow.js";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import "./Header.scss";
import india from "../img/India.png";
import shape from "../img/shape1.png";
import plus from "../img/tright.png";
import sumada from "../img/sumadula.png"
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconX,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandTwitter,
  IconBrandX,
  IconPhone,
} from "@tabler/icons-react";
import { FaArrowRight } from "react-icons/fa";

const { TabPane } = Tabs;

function Header() {
  const textShadowStyle = {
    textShadow: "4px 2px 6px rgba(0, 0, 0, 0.3)", // Adjusted shadow values
  };
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
    <section id="home">
  <div className="">
    <div className=" relative isolate px-4 sm:px-10 pt-14 lg:px-8">
    <div
          className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(70%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FB2465] to-[#c70202] opacity-30 sm:left-[calc(80%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(0% 100%, 25% 100%, 30% 70%, 50% 80%, 70% 40%, 80% 60%, 100% 40%, 100% 0%, 60% 10%, 40% 30%, 10% 20%)',
            }}
          />
        </div>
      <div className="mx-auto lg:max-w-2xl ">
        <div className="text-center mt-14">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
            Expand your <span className="text-[#FB2465]">horizons</span> abroad
          </h1>
          <p className="mt-6 text-sm text-gray-700 font-medium lg:text-base">
            <span className='w-4/6'>
              Embark on an extraordinary educational journey beyond borders, where knowledge meets adventure, and dreams take flight – discover your global academic odyssey with our study abroad programs
            </span>
          </p>
        </div>
      </div>
    </div>

    <div className="mt-10 flex items-center justify-center">
      <div className="p-2 bg-[#FB2465] rounded-full text-white font-semibold">
        <Link to="/connect" className="btn text-sm px-3 flex items-center">
          Connect <IconPhone className="pl-1 pb-1" />
        </Link>
      </div>
    </div>
  </div>
</section>


   
      {/* </div> */}
    </>
  );
}

export default Header;
