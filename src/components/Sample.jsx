import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Trending from './Trending';
import '../styles/Trending.css'

function Sample() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const productData = [
        {
            id: 1,
            imageurl: "https://images.pexels.com/photos/3934704/pexels-photo-3934704.jpeg?",
            name: "Iphone",
            price: "$20.99",
            description: "Dress for women"
        },

        {
            id: 2,
            imageurl: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?",
            name: "Headsets",
            price: "$20.99",
            description: "Dress for women"
        },

        {
            id: 3,
            imageurl: "https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?",
            name: "Game pad",
            price: "$20.99",
            description: "Dress for women"
        },

        {
            id: 4,
            imageurl: "https://images.pexels.com/photos/19090/pexels-photo.jpg?",
            name: "Sports Shoes",
            price: "$20.99",
            description: "Dress for women"
        },

        {
            id: 5,
            imageurl: "https://images.pexels.com/photos/546228/pexels-photo-546228.jpeg?",
            name: "sofa set",
            price: "$20.99",
            description: "Dress for women"
        },
    ]

    const product = productData.map(item => (
        <Trending
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description} />
    ))


    return (
        <div className='carousel-card'>
            <h2>TRENDING NOW</h2>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>;
            <h2>
                <button className='views'>View All Products</button>
            </h2>

        </div>


    )
}

export default Sample
