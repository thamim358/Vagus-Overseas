import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import { useNavigate } from "react-router-dom";
import { IconArrowElbowRight } from "@tabler/icons-react";
import { GiPayMoney } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import "./Aboutus.scss"
export const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  const handleChange = (value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/about");
  };
  return (
    <div
      className="section"
      id="aboutus"
      style={{ textAlign: "justify", textJustify: "auto" }}
    >
      <div className="mt-32 sm:px-2 background-circle">
        <div>
          <div className="  max-w-4xl text-center mx-auto lg:max-w-6xl mb-12">
            <h2 className="mb-6">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="#ff6537"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="903f4a9e-7ac3-441c-9613-04c15fcc0a14"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative text-[#ff6537] text-4xl font-bold">
                  About us
                </span>
              </span>
            </h2>
            {/* <p className="text-sm lg:text-base text-gray-600 font-medium mb-10"> */}
            <p className="mb-10 subdesc text-black font-medium">
              Welcome to Vagus Overseas Education , your trusted partner in
              making your dreams of studying abroad come true.Weunderstand that
              studying in a foreign country is a lifechanging experience, and we
              are here to guide you every step of the way. Our dedicated team of
              immigration experts and study abroad consultants are committed to
              helping you achieve your academic goals and unlock a world of
              opportunities.
            </p>
          </div>
          {/* <div className="flex flex-wrap -mx-4 w-[80%] h-[80%]"> */}
          <div className="flex justify-center">
  <div className="flex flex-wrap mx-auto ">
    <FeatureCard
      title="Financial-Aid Support"
      details="We offer programs affiliated with higher-ranked universities for quality education."
      icon={<FaUniversity className="text-white w-auto h-32" />}
    />
    <FeatureCard
      title="Admissions Guidance"
      details="Our programs provide better job prospects for future career success."
      icon={<BsBriefcaseFill className="text-white w-auto h-32" />}
    />
    <FeatureCard
      title="Visa Assistance"
      details="To enhance practical expertise and career readiness."
      icon={<GiSkills className="text-white h-32" />}
    />
    <FeatureCard
      title="Pre-Departure Preparation"
      details="To provide real-world experience and practical skills."
      icon={<MdModelTraining className="text-white w-auto h-32" />}
    />
    <FeatureCard
      title="Personalized Counselling"
      details="We provide no/low tuition fee options for accessible and affordable education."
      icon={<GiPayMoney className="text-white w-auto h-32" />}
    />
    <FeatureCard
      title="Post Arrival Assistance"
      details="To support students in pursuing their educational goals."
      icon={<PiStudentFill className="text-white w-auto h-32" />}
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
const FeatureCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="mt-10 px-2 w-1/2 lg:w-1/6 mx-24 flex items-center justify-center">
        <div className="mb-2 rounded-[20px] bg-white p-5 shadow-md md:px-2 xl:px-5 flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center justify-center h-[60px] w-[60px] p-3 rounded-full bg-[#ff6537]">
            {icon}
          </div>
          <h4 className="text-sm sm:text-base mb-2 font-semibold text-center">
            {title}
          </h4>
        </div>
      </div>
    </>
  );
};
