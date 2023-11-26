import React from 'react';
import "./Arrows.scss";
import {  IconArrowBadgeLeft, IconArrowBadgeRight } from '@tabler/icons-react';

export const Left = props => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-left"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <IconArrowBadgeLeft className="mt-2 ml-2"/>
    </div>
  );
};

export const Right = props => {
  const { style, onClick } = props;
  return (
    <div
      className="slick-arrow-right"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >

     <IconArrowBadgeRight className='mt-2 ml-2'/>
    </div>
  );
};