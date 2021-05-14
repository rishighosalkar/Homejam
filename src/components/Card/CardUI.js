import React from 'react'
import Carousel from "react-elastic-carousel";
import CardLayout from './CardLayout';
import BennyDayal from './assets/BennyDayal.png';
import AndreaJeremiah from './assets/AndreaJeremiah.png';
import ShilpaRao from './assets/ShilpaRao.png';
import VijayYesudas from './assets/VijayYesudas.png';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

function CardUI() {
    return (
        <div>
            <div>
            <div className="text-heading-1">
                <a href="/" style={{color:"white", textDecoration:"none"}}>Upcomping Shows</a>
                <div className="underline"></div>
            </div>
            <div className="text-heading-2">
                <a href="/" style={{textDecoration:"none", color: "#E5C558"}}>View All</a>
            </div>
            </div>
        
            <div style={{marginTop:"45px"}}>
                <Carousel breakPoints={breakPoints}>
                <CardLayout singer={BennyDayal}/>
                <CardLayout singer={AndreaJeremiah}/>
                <CardLayout singer={ShilpaRao}/>
                <CardLayout singer={VijayYesudas}/>
                </Carousel>
            </div>        
        </div>
        
    )
}

export default CardUI
