import React from 'react'
import './cardUI-style.css';
import arrowIcon from './assets/arrow-icon/arrow-icon.png'

export default function CardLayout(props) {
    return (
        <div className="card-card">
            <div className="card-container" >
                <img src={props.singer} className="card-img1" alt="" />
                <div>
                    <div className="card-text1">
                        folk
                                </div>
                    <div className="card-singer-name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="card-text2">
                        <span>More info</span>
                        <span className="arrow-icon"><img src={arrowIcon} alt="" /></span></div>
                </div>
            </div>
        </div>
    )
}
