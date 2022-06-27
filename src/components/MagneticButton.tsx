import React, {MouseEventHandler, useRef} from "react";
import styled from "styled-components";
import logo from "../logo.svg";

export const MagneticButton = () => {
    const magneticBackground = useRef(null);
    const magneticElement = useRef(null);

    const getChilds = (e: any) => {
        return {
            background: magneticBackground.current! as HTMLElement,
            element: magneticElement.current! as HTMLElement,
        }
    }

    const move = (e: any) => {
        const x = e.nativeEvent.layerX - e.target.clientWidth / 2;
        const y = e.nativeEvent.layerY - e.target.clientHeight / 2;
        const {background, element} = getChilds(e);
        background.style.transform = `translate(${x / 6}px, ${y / 6}px)`;
        element.style.transform = `translate(${x / 4}px, ${y / 4}px)`;

    }

    const time = 150;
    const startAnimation = (e: any) => {
        const {background, element} = getChilds(e);
        const transition = `all ${time}ms ease`;
        background.style.transition = transition;
        element.style.transition = transition;
    }

    const endAnimation = ($event: any) => {
        const {background, element} = getChilds($event);
        setTimeout(() => {
            background.style.transition = '';
            element.style.transition = '';
        }, time);
    }

    const start = ($event: any) => {
        startAnimation($event);
        endAnimation($event);
    }


    const end = ($event: any) => {
        const {background, element} = getChilds($event);
        startAnimation($event);
        background.style.transform = `translate(0px, 0px)`;
        element.style.transform = `translate(0px,0px)`;
        endAnimation($event);
    }

    return (
        <MagneticContainer onMouseMove={move} onMouseEnter={start} onMouseLeave={end}>
            <MagneticElement ref={magneticElement}>
                <img src={logo} style={{width: 100, height: 100}}/>
            </MagneticElement>
            <MagneticBackground ref={magneticBackground}/>
        </MagneticContainer>
    )
}

const size = 20;
const getSize = (multiplier: number) => {
    return `${size * multiplier}rem`;
}

const MagneticElement = styled.div`
        width: {getSize(0.3)};
        height: {getSize(0.3)};
        z-index: 2;
        pointer-events: none;
        img {
            height: 100%;
            vertical-align: bottom;
        }
`

const MagneticContainer = styled.button`
    border: none;
    background-color: transparent;
    position: relative;
    padding: {getSize(0.8)};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    `
const MagneticBackground = styled.div`
    background-color: #46fcb4;
    border-radius: {getSize(0.2)};
    position: absolute;
    width: {getSize(0.6)};
    height: {getSize(0.6)};
    z-index: 1; 
    pointer-events: none;
    box-shadow: 0 {getSize(0.3)} {getSize(1)} 0 rgba(#46fcb4, 0.85);
    `