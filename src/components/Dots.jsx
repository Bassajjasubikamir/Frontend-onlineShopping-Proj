import React from 'react'

function Dots({activeIndex, onclick, iamgeSlider}) {
  return (
    <div className='all-dots'>
      {iamgeSlider.map((slide,index) =>(
        <span
        key={index}
        className={'${}activeIndex === index ? "dot active-dot" : "dot"}'}
        onClick={()=> onclick(index)}
        ></span>
      ))}
    </div>
  )
}

export default Dots
