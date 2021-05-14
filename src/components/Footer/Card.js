import React from 'react';
import './card-style.css';

export default function Card(props) {
    return (
        <div className="footer-card__card">
            <div className="footer-card__container" >
                <div className="section1">
                    <div>
                        <img src={props.user_image}  alt="" className="footer-card__img"/>
                    </div>
                    <div className="footer-card__text1">
                        Hellen Jemmy
                    </div>
                </div>
                <div className="section2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deleniti ut quaerat placeat nulla ea? 
                        Libero doloribus quia quod ipsum accusamus repudiandae, voluptate officia error quos, et, 
                        consequuntur voluptas esse.
                    </p>
                </div>
            </div>
        </div>
    )
}
