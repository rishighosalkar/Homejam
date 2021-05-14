import React from 'react';
import './circle-layout.css';
import calendar from './assets/calendar/calendar.svg';
import heart from './assets/heart/heart.svg';
import star from './assets/star/star.svg';

function CircleLayout() {
    return (
        <div className = "circle-layout__container">
            <div className="circle-layout__card">
                <svg>
                    <circle cx = "80" cy = "80" r = "80" />
                    <circle cx = "80" cy = "80" r = "80" />
                </svg>
                <div className="circle-layout__icon ">
                    <img src={heart} alt=""/>
                </div>
                <div className="circle-layout__text circle-layout__text1">0<br/></div>
                <div className="circle-layout__text circle-layout__text2">Label</div>
            
            </div>

            <div className="circle-layout__card">
            <svg>
                <circle cx = "80" cy = "80" r = "80" />
                <circle cx = "80" cy = "80" r = "80" />
            </svg>
                <div className="circle-layout__icon ">
                    <img src={calendar} alt=""/>
                </div>
                <div className="circle-layout__icon__star">
                    <img src={star} alt=""/>
                </div>
                <div className="circle-layout__text circle-layout__text1">0<br/></div>
                <div className="circle-layout__text circle-layout__text2">Label</div>
            
            </div>

            <div className="circle-layout__card">
            <svg>
                <circle cx = "80" cy = "80" r = "80" />
                <circle cx = "80" cy = "80" r = "80" />
            </svg>
                <div className="circle-layout__icon">
                    <img src={calendar} alt=""/>
                </div>
                <div className="circle-layout__icon__star">
                    <img src={star} alt=""/>
                </div>
                <div className="circle-layout__text circle-layout__text1">0<br/></div>
                <div className="circle-layout__text circle-layout__text2">Label</div>
            
            </div>

            <div className="circle-layout__card">
                <svg>
                    <circle cx = "75" cy = "75" r = "80" />
                    <circle cx = "75" cy = "75" r = "80" />
                </svg>
                <div className="circle-layout__icon">
                    <img src={calendar} alt=""/>
                </div>
                <div className="circle-layout__icon__star">
                    <img src={star} alt=""/>
                </div>
                <div className="circle-layout__text circle-layout__text1">0<br/></div>
                <div className="circle-layout__text circle-layout__text2">Label</div>
            
            </div>
        </div>
    )
}

export default CircleLayout
