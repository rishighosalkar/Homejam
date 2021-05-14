import {React, useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import CircleLayout from '../CircleLayout/CircleLayout';
import './header-style.css';
import logo from './assets/logo.png';
import menu from './assets/menu-icon.svg';

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, [])

    const handleMediaQueryChange = mediaQuery =>{
        if(mediaQuery.matches){
            setIsSmallScreen(true);
        }
        else{
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header-nav">
            <img src={logo} alt = "logo" className="logo"/>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit>
                <nav className = "navbar">
                        <a href="/">Search</a>
                        <a href="/">Home</a>
                        <a href="/">Account</a>
                    </nav>
            </CSSTransition>
            <button onClick={toggleNav} className = "nav-menu">
                <img src={menu} alt=""/>
            </button>
            <div className="text-home-1">
			    <h1>Cari Cari</h1>
            </div>
            <div className="text-home-2">
                <h3>Live from their sofa to yours. Get closer to your favourite<br/> artists, and never miss out</h3>
		    </div>
            <div style = {{alignItems:"center", justifyContent:"center"}}>
                <CircleLayout />
            </div>
        </header>
        
    )
}
