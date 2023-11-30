import React from 'react'

function ProductItem({ productName, price, productImage }) {

    return (
        <div className='productItem'>
            <img className='product-image' src={productImage} alt="" />
            <h3> {productName}</h3>
            <p className='price'>${price}</p>
            <p>
                <button>Add To Cart </button>
            </p>
           
        </div>
    )
}
export default ProductItem;


