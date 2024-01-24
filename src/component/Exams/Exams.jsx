import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import pte from "../img/pte.png";
import gre from "../img/gre.jpg";
import gmat from "../img/Gmat.png";
import ielts from "../img/ielts.jpg";
import tofel from "../img/tofel.jpg";
import sat from "../img/sat.png";
import mcat from "../img/mcat.jpg";
import lsat from "../img/lsat.png";
import "./Exams.scss";
function Exam() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  const cardData = [
    {
      name: "Pearson Language Test (PTE)",
      description:
        "A computer-based academic English language test aimed at non-native English speakers wanting to study abroad.",
      img: pte,
    },
    {
      name: "Scholastic Aptitude Test (SAT)",
      description:
        "A standardized test widely used for college admissions in the United States.",
      img: sat,
    },
    {
      name: "Test of English as a Foreign Language (TOEFL)",
      description:
        "A test used to measure the English language ability of non-native speakers wishing to enroll in English-speaking universities.",
      img: tofel,
    },
    {
      name: "Graduate Management Admission Test (GMAT)",
      description:
        "A computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills in written English for use in admission to a graduate management program.",
      img: gmat,
    },
    {
      name: "Graduate Record Examination (GRE)",
      description:
        "A standardized test used to get admissions in various graduate schools or business graduate schools in various English-speaking countries.",
      img: gre,
    },
    {
      name: "International English Language Testing System (IELTS)",
      description:
        "An international standardized test of English language proficiency for non-native English language speakers.",
      img: ielts,
    },
    {
      name: "Medical College Admission Test (MCAT)",
      description:
        "A computer-based standardized examination for prospective medical students in the United States, Australia, Canada, and Caribbean Islands.",
      img: mcat,
    },
    {
      name: "Law School Admission Test (LSAT)",
      description:
        "A half-day standardized test required for admission to JD programs at many law schools.",
      img: lsat,
    },
  ];

  return (
    <>
      <div className="section wave p-7 bg" id="exam">
        <div className="py-10 px-5 lg:mx-12 sm:mx-4 ">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FB2465] font-bold mb-3 lg:mb-5 self-start wow fadeInUp">
            Exams for Global Education Opportunities
          </div>
          <div className="flex justify-center ">
            <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 ">
              {cardData.slice(0, 8).map((card, index) => (
                <div
                  key={index}
                  className="group h-60 w-60 [perspective:1000px]"
                >
                  {/* Card Structure */}
                  <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front side */}
                    <div className="absolute inset-0">
                      {/* Card Image */}
                      {/* Example Image */}

                      <div className=" p-10 ">
                        <img className="h-24 " src={card.img} alt="" />
                        <div className="font-bold text-[#FB2465] text-center">
                          {" "}
                          {card.name}
                        </div>
                      </div>
                    </div>
                    {/* Back side */}
                    <div className="absolute inset-0 h-full w-full rounded-xl card-exam  text-center  [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="flex  flex-col items-center justify-center p-5">
                        <h1 className="text-base font-bold text-[#FB2465]">
                          {card.name}
                        </h1>
                        <p className="text-black text-sm mt-3 ">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exam;
