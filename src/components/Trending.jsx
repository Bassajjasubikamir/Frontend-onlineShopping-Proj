import React from 'react'

function Trending(props) {
  return (
    <div className='card'>
      <img className='product--image' src={props.url} alt="" />
      <h2>{props.name}</h2>
      <p className='price'>{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add To Cart </button>
      </p>
     
    </div>
  )
}

export default Trending
