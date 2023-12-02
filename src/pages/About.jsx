import React from 'react'
import Prod8 from '../assets/Prod8.jpg'
import '../styles/About.css'
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${Prod8 })` }}>
     
      </div>

      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <hr/>
        <p>
        ShopyPub builds for the long term, and that means investing in our planet so that we can future proof ShopyPub and help our merchants future proof their businesses, too.
         Our Sustainability Services include Online-shopping, Discounts and Payment mode , reducing and removing our carbon emissions, 
         and creating solutions for our merchants to do the same.ShopyPub has grown from 5 people making delieveries to over 10,000 across the globe. 
         With millions of businesses powered by ShopyPub, we invest in our people and our communities. Our Social Impact initiatives focus on enabling
          an equitable future by building products 
         and programs to support our team and merchants.
        </p>
      </div>
    </div>
  )
}

export default About
