import React from 'react'
import './Popular.css'
//importing data_product file
import data_product from '../../assets/data'
import Item from '../Item/Item'


function popular() {
  return (
    <div className='popular'>
      <h1>TOP CATEGORIES </h1>
      <hr />
    <div className='popular-item'>
      {data_product.map((item,i)=>{
        return <Item key={i} 
        id={item.id} 
        name={item.name} 
        image={item.image} 
        new_price={item.new_price} 
        old_price={item.old_price}/>
      })}    
    </div>  
    </div>
  )
}

export default popular