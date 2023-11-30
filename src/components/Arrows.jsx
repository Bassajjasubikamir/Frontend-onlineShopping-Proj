import React from 'react'
import {AiOutlineLeftCircle} from 'react-icons/ai'
import {AiOutlineRightCircle} from 'react-icons/ai'
function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className='arrows'>
      <span className='prev' onClick={prevSlide}><AiOutlineLeftCircle/></span>
      <span className='next' onClick={nextSlide}><AiOutlineRightCircle/></span>
    </div>
  )
}

export default Arrows
