  import React from "react";
  import { useParams } from "react-router-dom";
  import NavBar from "../Navbar/Navbar";
  import Slider from "react-slick";
  import { Left, Right } from "../Arrows/Arrows.jsx";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import "./Universities.scss";
  import UniversityData from "./University.json";
  import imageMap from "./imageMap.jsx";
  const UniversityPage = () => {
    const { country } = useParams();

    let countryDetails = null;
    let universities = null;
    let facilities =null
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
        facilities = UniversityData.usa.facilities;
        break;
      case "germany":
        countryDetails = UniversityData.germany.countryDetails;
        universities = UniversityData.germany.universities;
        facilities = UniversityData.germany.facilities;
        break;
      case "uk":
        countryDetails = UniversityData.uk.countryDetails;
        universities = UniversityData.uk.universities;
        facilities = UniversityData.uk.facilities;
        break;
      case "australia":
        countryDetails = UniversityData.australia.countryDetails;
        universities = UniversityData.australia.universities;
        facilities = UniversityData.australia.facilities;
        break;
      case "italy":
        countryDetails = UniversityData.italy.countryDetails;
        universities = UniversityData.italy.universities;
        facilities = UniversityData.italy.facilities;
        break;
      case "france":
        countryDetails = UniversityData.france.countryDetails;
        universities = UniversityData.france.universities;
        facilities = UniversityData.france.facilities;
        break;
      case "japan":
        countryDetails = UniversityData.japan.countryDetails;
        universities = UniversityData.japan.universities;
        facilities = UniversityData.japan.facilities;
        break;
      case "switzerland":
        countryDetails = UniversityData.switzerland.countryDetails;
        universities = UniversityData.switzerland.universities;
        facilities = UniversityData.switzerland.facilities;
        break;

      default:
        countryDetails = {
          name: "Country Not Found",
          description: "Oops! The requested country page was not found.",
        };
    }
    
    return (
      <>
        <div>
        {/* <NavBar /> */}
        <div className="p-12 font-bold text-[#FB2465] text-4xl">
        <h1>Top Universities in {countryDetails.uni}</h1>
          <hr
            style={{
              backgroundColor: "#FB2465",
              width: "110px",
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
                        className=""
                      />
                      <img
                      src={imageMap[university.key]}
                        alt={`Image of ${university.name}`}
                        className="city-card-img max-h-48"
                      />

                      <div className="p-3">
                        <div id="" />
                        <p className="text-base sm:text-sm lg:text-base ">
                          {university?.name}
                        </p>
                        <div id="">
                          <p className="text-sm text-black">
                            {university?.location}
                          </p>
                          {/* <p className="text-lg text-black">{university.description}</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className=" ">
            <div className="mt-8 ext-4xl sm:text-4xl lg:text-5x  ">
              About
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
            </div>
          <div className="text-gray-500 text-lg mt-3">{countryDetails.description}</div>
          </div>
             <div className="mt-5">
          <p className="text-4xl sm:text-4xl lg:text-5xl  text-[#FB2465] font-bold text-start wow fadeInUp pt-4">
           Facilities
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
          </p>

          <div className="flex flex-wrap justify-center mt-4 wow fadeInUp mx-10 ">
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 gap-5 mt-5">
              {facilities.map((card, index) => (
                <div className="flex" key={index}>
                  <div
                    className="bg-white bg-opacity-5 rounded-lg ring-1 ring-[#FB2465] shadow-lg transform hover:scale-110 transition-transform duration-500"
                    style={{ borderRadius: "15px" }}
                  >
                    {/* <div className="text-center p-6 wow fadeInUp">
                      {card.logo}
                    </div> */}
                    <div className="px-4 py-2">
                      <h3 className="text-base text-center text-[#FB2465] uppercase font-bold mb-2 wow fadeInUp">
                        {card.title}
                      </h3>
                      <p className="text-[#737070] text-center font-semibold text-base p-3 wow fadeInUp">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
      {/* <Footer/> */}
      </>
    
    );
  };

  export default UniversityPage;
