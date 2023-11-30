//Render UI based on props
import React from 'react'
import './Item.css'
function Item(props) {
  return (
    <div className='item'>
      <img src={props.image} alt="" className='image' />

      {/* <div className="item_prices">
        <p>{props.name}</p>
        <div className="item-price-new">
          {props.new_price}
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
      </div> */}
      <button className='button'>View Store</button>
    </div>
  )
}

export default Item
