import React, { useState } from 'react'
import SliderContent from "./SliderContent"
import iamgeSlider from "./iamgeSlider"
import Arrows from './Arrows'
import '../styles/Slider.css'
import Dots from './Dots'

const len = iamgeSlider.length - 1
console.log(len)
console.log(iamgeSlider)
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='slider-container'>
      <SliderContent activeIndex={activeIndex} iamgeSlider={iamgeSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        iamgeSlider={iamgeSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  )
}

export default Slider
