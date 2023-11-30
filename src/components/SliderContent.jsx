import React from 'react'

function SliderContent({activeIndex, iamgeSlider}) {
  return (
    <section className='slides'>
        {iamgeSlider.map((slide, index)=>(
            <div
            key={index}
            className={index === activeIndex ? "slide active" : "inactive"}
            >
            <img className="slide-image" src={slide.url} alt =""/>
            <h2 className='slide-title'>{slide.title}</h2>
            <h3 className='slide-text'>{slide.description}</h3>  
        </div>
        ))}
    </section>
  )
}

export default SliderContent
