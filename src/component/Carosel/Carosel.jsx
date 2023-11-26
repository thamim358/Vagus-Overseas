import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Left, Right } from '../Arrows/Arrows.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carosel.scss'; // Update the correct path for your Carousel SCSS file
import america from '../img/america.jpg';
import aus from '../img/austrliq.jpg';
import germany from '../img/germany.jpg';
import france from '../img/france.jpg';
import italy from '../img/italy.jpg';
import uk from '../img/uk.jpg';
import swit from '../img/switzerland.jpg';
import japan from '../img/japan.jpg';

class CardCarousel extends Component {
  render() {
    return (
      <div className="p-12 font-bold text-[#FB2465] text-4xl">
        <h1 className='mb-5'>Top Countries</h1>
        <hr className="hr-style" />
        <div className="top-cities-carousel-wrap">
          <CitySlider />
        </div>
        <hr className="hr-style" />
      </div>
    );
  }
}

class CitySlider extends React.Component {
  render() {
    var settings = {
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
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description, route }) => (
            <Link
              to={{ pathname: `/universities/${route}` }}
              key={id}
              className="link"
            >
              <CityCard city={city} url={url} description={description} />
            </Link>
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url,
            }}
          />
          <div className="p-3">
            <div id="" />
            <p className="text-base text-base sm:text-sm lg:text-base">{this.props.city}</p>
            <div id="">
              <p className='text-sm text-black'>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const topCitiesData = [
  {
    id: 1,
    city: 'USA',
    route: 'usa',
    description: 'Discover Universities in America',
    url: america,
  },
  {
    id: 2,
    city: 'Germany',
    route: 'germany',
    description: "Discover Universities in Germany",
    url:germany
  },
  {
    id: 3,
    city: 'UK',
    route: 'uk',
    description: 'Discover Universities in UK',
    url:uk
  },
  {
    id: 4,
    city: 'Australia',
    route: 'australia',
    description: "Discover Universities in Australia",
    url:aus
  },
  {
    id: 5,
    city: 'Japan',
    route: 'japan',
    description: 'Discover Universities in Japan',
    url:japan
  },
  {
    id: 6,
    city: 'Italy',
    route: 'italy',
    description: 'Discover Universities in Italy',
    url:italy
  },
  {
    id: 7,
    city: 'France',
    route: 'france',
    description: 'Discover Universities in France',
    url:france
  },
  {
    id: 8,
    city: 'Switzerland',
    route: 'switzerland',
    description: 'Discover Universities in Switzerland',
    url:swit
  },
];

export default CardCarousel;


