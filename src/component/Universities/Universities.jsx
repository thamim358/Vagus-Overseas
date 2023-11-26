import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import america from "../img/america.jpg";
import Slider from "react-slick";
import { Left, Right } from "../Arrows/Arrows.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Universities.scss";
import UniversityData from "./University.json";
const UniversityPage = () => {
  const { country } = useParams();

  let countryDetails = null;
  let universities = null;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Display 3 slides on desktop
    slidesToScroll: 1,
    nextArrow: <Right className="" />,
    prevArrow: <Left />,
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust settings for smaller tablets and mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  switch (country) {
    case "usa":
      countryDetails = UniversityData.usa.countryDetails;
      universities = UniversityData.usa.universities;
      break;
    case "germany":
      countryDetails = UniversityData.germany.countryDetails;
      universities = UniversityData.germany.universities;
      break;
    case "uk":
      countryDetails = UniversityData.uk.countryDetails;
      universities = UniversityData.uk.universities;
      break;
    case "australia":
      countryDetails = UniversityData.australia.countryDetails;
      universities = UniversityData.australia.universities;
      break;
    case "italy":
      countryDetails = UniversityData.italy.countryDetails;
      universities = UniversityData.italy.universities;
      break;
    case "france":
      countryDetails = UniversityData.france.countryDetails;
      universities = UniversityData.france.universities;
      break;
    case "japan":
      countryDetails = UniversityData.japan.countryDetails;
      universities = UniversityData.japan.universities;
      break;
    case "switzerland":
      countryDetails = UniversityData.switzerland.countryDetails;
      universities = UniversityData.switzerland.universities;
      break;

    default:
      countryDetails = {
        name: "Country Not Found",
        description: "Oops! The requested country page was not found.",
      };
  }
 const unii=countryDetails;
  return (
    <div>
      <NavBar />
      <div className="p-12 font-bold text-[#FB2465] text-4xl">
        <h1>Top Universities {unii.uni}</h1>
        <hr
          style={{
            backgroundColor: "#FB2465",
            width: "75px",
            height: "2px",
            border: "none",
            marginTop: "0px",
            marginLeft: "0px",
            marginBottom: "20px",
          }}
        />
        <div className="top-cities-carousel-wrap">
          <Slider {...settings}>
            {universities.map((university, index) => (
              <div key={index}>
                <div className="city-card-wrapper">
                  <div className="city-card">
                    <div
                      className="city-card-img"
                      style={{
                        backgroundImage: `url(${university.imageUrl})`,
                      }}
                    />
                    <div className="p-3">
                      <div id="" />
                      <p className="text-base sm:text-sm lg:text-base ">{university.name}</p>
                      <div id="">
                        <p className="text-sm text-black">{university.location}</p>
                        {/* <p className="text-lg text-black">{university.description}</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <hr
          style={{
            height: "1px",
            color: "#e7e7e7",
            borderTop: "none",
            borderLeft: "none",
          }}
        />
      </div>
      <hr className="section-divide-hr" />
    </div>
  );
};

export default UniversityPage;
