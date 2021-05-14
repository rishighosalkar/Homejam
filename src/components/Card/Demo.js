import React from 'react'
import BennyDayal from '../../assets/BennyDayal.png';
import arrowIcon from '../../assets/arrow-icon/arrow-icon.png'
import './cardUI-style.css'

export default function Demo() {
    return (
        <div>
            <div>
            <div className="text-heading-1">
                <a href="/" style={{color:"white", textDecoration:"none"}}>Upcomping</a>
                <div className="underline"></div>
            </div>
            <div className="text-heading-2">
                <a href="/" style={{textDecoration:"none", color: "#E5C558"}}>View All</a>
            </div>
            </div>
        
            <div className="card-row">
                <div className="card-column">
                    <div className="card-card">
                        <div className = "card-container" >
                            <img src = {BennyDayal} className = "img1" alt=""/>
                            <div>
                                <div className = "card-text1">
                                    folk
                                </div>
                                <div className = "card-singer-name">
                                    <h3>Benny Dayal</h3>
                                </div>
                                <div className = "card-text2">
                                    <span>More info</span> 
                                    <span className = "arrow-icon"><img src = {arrowIcon} alt=""/></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card-column">
                    <div className="card-card">
                        <div className = "card-container" >
                            <img src = {BennyDayal} className = "img1" alt=""/>
                            <div>
                                <div className = "card-text1">
                                    folk
                                </div>
                                <div className = "card-singer-name">
                                    <h3>Benny Dayal</h3>
                                </div>
                                <div className = "card-text2">
                                    <span>More info</span> 
                                    <span className = "arrow-icon"><img src = {arrowIcon} alt=""/></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card-column">
                    <div className="card-card">
                        <div className = "card-container" >
                            <img src = {BennyDayal} className = "img1" alt=""/>
                            <div>
                                <div className = "card-text1">
                                    folk
                                </div>
                                <div className = "card-singer-name">
                                    <h3>Benny Dayal</h3>
                                </div>
                                <div className = "card-text2">
                                    <span>More info</span> 
                                    <span className = "arrow-icon"><img src = {arrowIcon} alt=""/></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="card-column">
                    <div className="card-card">
                        <div className = "card-container" >
                            <img src = {BennyDayal} className = "img1" alt=""/>
                            <div>
                                <div className = "card-text1">
                                    folk
                                </div>
                                <div className = "card-singer-name">
                                    <h3>Benny Dayal</h3>
                                </div>
                                <div className = "card-text2">
                                    <span>More info</span> 
                                    <span className = "arrow-icon"><img src = {arrowIcon} alt=""/></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
