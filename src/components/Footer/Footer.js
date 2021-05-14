import React from 'react';
import Carousel from "react-elastic-carousel";
import Card from './Card';
import './footer-style.css';
import review1 from './assets/review1.png';
import review2 from './assets/review2.png';
import review3 from './assets/review3.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

export default function Footer() {
    
    return (
        <>
            <div className="footer-text__heading">
                <a href="/" style={{color:"white", textDecoration:"none"}}>Reviews</a>
                <div className="footer-text__underline"></div>
            </div>
            <div className="footer-carousel">
                <Carousel breakPoints={breakPoints}>
                <Card user_image={review1} />
                <Card user_image={review2} />
                <Card user_image={review3} />
                <Card user_image={review1} />
                <Card user_image={review2}/>
                <Card user_image={review2}/>
                </Carousel>
            </div>
        </>
    )
}
