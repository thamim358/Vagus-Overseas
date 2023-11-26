import React, { Component } from 'react';
import CitySlider from './CitySlider';
import "./Universities.scss"
class CardCarousel extends Component {
  render() {
    return (
      <div>
        <div className="p-12 font-bold  text-[#FB2465] text-4xl">
          <h1>Top Countries</h1>
          {/* Other HTML elements */}
          <div className="top-cities-carousel-wrap">
            <CitySlider />
          </div>
          {/* Other HTML elements */}
        </div>
        <hr className="section-divide-hr" />
      </div>
    );
  }
}

export default CardCarousel;
