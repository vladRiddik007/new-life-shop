import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

export default function Slick() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 10000,
    className: "slick",
  }
  return (
    <Slider {...settings}>
      <div>
        <img
          src={`./slick.jpg`}
          title="New Life"
          alt="New Life"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div>
        <img
          src={`./slick.jpg`}
          title="New Life"
          alt="New Life"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </Slider>
  )
}
