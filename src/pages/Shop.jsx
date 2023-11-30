import React from 'react'
import ProductItem from '../components/ProductItem'
import StoreProdList  from '../assets/StoreProdList'
import '../styles/Shop.css'
function Shop() {
    return (
        <div className='shop'>
            <h1 className='shopTitle'>Store Review</h1>
            <div className="shopList">
                {StoreProdList.map((productItem, key) => {
                    return <ProductItem
                        key={key}
                        productName={productItem.productName}
                        productImage={productItem.productImage}
                        price={productItem.price} />

                })}
            </div>
        </div>
    )
}

export default Shop
